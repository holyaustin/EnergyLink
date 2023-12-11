// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IOwnable {
    function transferOwnership(address newOwner) external;
}

interface ICommunityItems is IOwnable {
    function mintCreatorMembership(address _creator) external;

    function mintConsumerMembership(address _member) external;

    function mintProsumerMembership(address _member) external;

    function mintInvestorMembership(address _member) external;

    function mintExternalMembership(address _external) external;

    function getIds() external pure returns (uint256[5] memory);
}
