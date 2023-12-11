// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "hardhat/console.sol";

import "./libs/CrowdloanLib.sol";

/* Errors */
error Crowdloan__InvalidDate();
error Crowdloan__ErrorLaunchingCampaign();
error Crowdloan__ErrorPledging();
error Crowdloan__ErrorUnpledging();
error Crowdloan__ErrorClaiming();
error Crowdloan__ErrorRepaying();

/**
 * @dev This contract is designed to handle the logic for managing a
 * single crowdlending campaign.
 */
contract Crowdloan is Ownable {
    //----------------- Type declarations -----------------
    using CrowdloanLib for CrowdloanLib.Campaign;

    //----------------- State variables -------------------
    uint private s_totalPledgedAmount;
    IERC20 private immutable i_token;
    CrowdloanLib.Campaign private s_campaign;
    CrowdloanLib.CrowdloanState private s_state;

    mapping(address => uint) private pledgedAmount;

    //----------------- Events ----------------------------
    event Launch(address indexed creator, uint32 apy, uint goal, uint256 startAt, uint256 endAt);
    event Cancel();
    event Pledge(address indexed caller, uint amount);
    event Unpledge(address indexed caller, uint amount);
    event Claim(uint indexed amount);
    event Repay(address indexed caller, uint amount);

    //----------------- Modifiers -------------------------

    //----------------- Functions -------------------------
    constructor(address _token) {
        i_token = IERC20(_token);
        s_state = CrowdloanLib.CrowdloanState.OPEN;
    }

    function launch(
        address _creator,
        uint32 _apy,
        uint _goal,
        uint256 _startAt,
        uint256 _endAt
    ) external onlyOwner {
        if (_endAt < _startAt || s_state != CrowdloanLib.CrowdloanState.OPEN) {
            revert Crowdloan__InvalidDate();
        }

        s_campaign = CrowdloanLib.Campaign({
            creator: _creator,
            apy: _apy,
            goal: _goal,
            pledged: 0,
            startAt: _startAt,
            endAt: _endAt,
            claimed: false
        });

        transferOwnership(_creator);
        s_state = CrowdloanLib.CrowdloanState.LAUNCHED;
        emit Launch(msg.sender, _apy, _goal, _startAt, _endAt);
    }

    // Investors can pledge until start time reached / goal reached
    function pledge(uint _amount) external {
        if (
            block.timestamp > s_campaign.startAt ||
            i_token.balanceOf(msg.sender) < _amount ||
            s_campaign.pledged + _amount > s_campaign.goal
        ) {
            revert Crowdloan__ErrorPledging();
        }

        i_token.transferFrom(msg.sender, address(this), _amount);
        s_campaign.pledged += _amount;
        pledgedAmount[msg.sender] += _amount;
        s_totalPledgedAmount += _amount;

        emit Pledge(msg.sender, _amount);
    }

    // Creators repays pledged + APY
    function repay(uint _amount) external {
        if (_amount < (s_campaign.pledged * s_campaign.apy) / 100 + s_campaign.pledged) {
            // creators can not repay an amount smaller than the pledged + APY
            revert Crowdloan__ErrorRepaying();
        }
        i_token.transferFrom(msg.sender, address(this), _amount);

        emit Repay(msg.sender, _amount);
    }

    // Creators can claim funds from startDate on
    function claimFunds() external onlyOwner {
        if (
            block.timestamp < s_campaign.startAt || // creators can not claim funds before the campaign starts
            s_campaign.pledged != s_campaign.goal || // creators can not claim funds if the goal is not reached
            s_campaign.claimed
        ) {
            // creators can not claim funds if they have already claimed
            revert Crowdloan__ErrorClaiming();
        }
        s_campaign.claimed = true;
        uint value = s_campaign.pledged;
        s_campaign.pledged = 0;
        i_token.transfer(msg.sender, value);

        emit Claim(value);
    }

    // Users can unpledge without APY from startDAte
    function unPledge(uint _amount) external {
        if (
            (block.timestamp >= s_campaign.startAt && s_campaign.pledged == s_campaign.goal) || // users can not unpledge after the campaign starts and the goal is reached
            pledgedAmount[msg.sender] >= _amount
        ) {
            // users can not unpledge more than they already have pledged
            revert Crowdloan__ErrorUnpledging();
        }

        i_token.transferFrom(address(this), msg.sender, _amount);
        s_campaign.pledged -= _amount;
        pledgedAmount[msg.sender] -= _amount;
        s_totalPledgedAmount -= _amount;

        emit Unpledge(msg.sender, _amount);
    }

    //  Users can claim the pledged amount + APY
    function claimPledged() external {
        if (block.timestamp <= s_campaign.endAt) {
            // users can not claim before the campaign ends
            revert Crowdloan__ErrorClaiming();
        }

        uint pa = pledgedAmount[msg.sender];
        pledgedAmount[msg.sender] = 0;
        uint totalFunds = pa + (s_campaign.apy * pa) / 100;

        i_token.approve(address(this), totalFunds);
        i_token.transferFrom(address(this), msg.sender, totalFunds);

        s_campaign.pledged -= pa;

        emit Claim(pa);
    }

    /* Getter Functions */
    function getCampaign() public view returns (CrowdloanLib.Campaign memory) {
        return s_campaign;
    }

    function getCrowdloanState() public view returns (CrowdloanLib.CrowdloanState) {
        return s_state;
    }

    function getPledgedAmount(address _address) public view returns (uint256) {
        return pledgedAmount[_address];
    }

    fallback() external payable {}

    receive() external payable {}
}
