// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

import "../libs/CrowdloanLib.sol";
import "../interfaces/ICrowdloan.sol";
import "../Crowdloan.sol";

/** @title Crowdloan Factory Contract
 *  @author EcoVerse Team
 *  @notice This factory contract allows creating and tracking crowdlending campaigns for energy communities
 */
contract CrowdloanFactory is Ownable {
    //----------------- Type declarations -----------------
    using CrowdloanLib for CrowdloanLib.Campaign;

    //----------------- State variables -------------------
    mapping(address => address[]) private s_crowdloans; // owner address -> crowdloans addresses

    //----------------- Temp variables (for indexer) ------
    address[] private s_crowdloans_array; // array of crowdloans

    //----------------- Events ----------------------------
    event NewCrowdloan(address indexed crowdloan);

    //----------------- Modifiers -------------------------

    //----------------- Functions -------------------------
    constructor() {}

    function createCrowdloan(
        uint32 _apy,
        address _token,
        uint _goal,
        uint256 _startAt,
        uint256 _endAt
    ) public returns (address _crowdloanAddress) {
        Crowdloan newCrowdloan = new Crowdloan(_token);

        newCrowdloan.launch(msg.sender, _apy, _goal, _startAt, _endAt);
        _crowdloanAddress = address(newCrowdloan);
        s_crowdloans_array.push(_crowdloanAddress);

        s_crowdloans[msg.sender].push(_crowdloanAddress);
        emit NewCrowdloan(_crowdloanAddress);
    }

    /* Getter Functions (TO DO: indexer) */
    function getAllCrowdloans()
        public
        view
        returns (
            address[] memory _crowdloans,
            CrowdloanLib.CrowdloanState[] memory _states,
            CrowdloanLib.Campaign[] memory _campaigns
        )
    {
        _crowdloans = s_crowdloans_array;
        _states = new CrowdloanLib.CrowdloanState[](_crowdloans.length);
        _campaigns = new CrowdloanLib.Campaign[](_crowdloans.length);

        for (uint i = 0; i < _crowdloans.length; i++) {
            _states[i] = ICrowdloan(_crowdloans[i]).getCrowdloanState();
            _campaigns[i] = ICrowdloan(_crowdloans[i]).getCampaign();
        }
    }

    function getAllCampaignsByOwner(
        address _owner
    )
        public
        view
        returns (
            address[] memory _crowdloans,
            CrowdloanLib.CrowdloanState[] memory _states,
            CrowdloanLib.Campaign[] memory _campaigns
        )
    {
        _crowdloans = s_crowdloans[_owner];
        _states = new CrowdloanLib.CrowdloanState[](_crowdloans.length);
        _campaigns = new CrowdloanLib.Campaign[](_crowdloans.length);

        for (uint i = 0; i < _crowdloans.length; i++) {
            _states[i] = ICrowdloan(_crowdloans[i]).getCrowdloanState();
            _campaigns[i] = ICrowdloan(_crowdloans[i]).getCampaign();
        }
    }
}
