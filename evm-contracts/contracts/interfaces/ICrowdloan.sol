// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/interfaces/IERC20.sol";
import "../libs/CrowdloanLib.sol";

interface ICrowdloan {
    event Launch(address indexed creator, uint32 apy, uint goal, uint256 startAt, uint256 endAt);
    event Cancel();
    event Pledge(address indexed caller, uint amount);
    event Unpledge(address indexed caller, uint amount);
    event Claim(uint indexed amount);
    event Repay(address indexed caller, uint amount);

    function launch(
        address _creator,
        uint32 _apy,
        uint _goal,
        uint256 _startAt,
        uint256 _endAt
    ) external;

    function pledge(uint _amount) external;

    function repay(uint _amount) external;

    function claimFunds() external;

    function unPledge(uint _amount) external;

    function claimPledged() external;

    function pledgedAmount(address user) external view returns (uint);

    function getCampaign() external view returns (CrowdloanLib.Campaign memory);

    function getCrowdloanState() external view returns (CrowdloanLib.CrowdloanState);
}
