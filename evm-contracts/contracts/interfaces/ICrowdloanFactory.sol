// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "../libs/CrowdloanLib.sol";

interface ICrowdloanFactory {
    function createCrowdloan(
        uint32 _apy,
        address _token,
        uint _goal,
        uint256 _startAt,
        uint256 _endAt
    ) external returns (address _crowdloanAddress);

    function getAllCrowdloans()
        external
        view
        returns (
            address[] memory _crowdloans,
            CrowdloanLib.CrowdloanState[] memory _states,
            CrowdloanLib.Campaign[] memory _campaigns
        );

    function getAllCampaignsByOwner(
        address _owner
    )
        external
        view
        returns (
            address[] memory _crowdloans,
            CrowdloanLib.CrowdloanState[] memory _states,
            CrowdloanLib.Campaign[] memory _campaigns
        );
}
