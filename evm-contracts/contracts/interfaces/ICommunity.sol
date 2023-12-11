// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/** @title Energy Community Interface
 *  @author EcoVerse
 *  @notice This interface is for interacting with the Community contract
 */
interface ICommunity {
    //----------------- Type declarations -----------------
    enum MemberStatus {
        INACTIVE, // not participating in the community currently
        PENDING, // has applied for membership but it's not approved yet
        ACTIVE, // is in good standing
        SUSPENDED // has been temporarily suspended
    }

    struct Location {
        int256 lat;
        int256 lon;
    }

    struct Member {
        Location location;
        string _memberIdentifier;
        MemberStatus status;
    }

    //----------------- Events ----------------------------
    event MemberEnter(address indexed member);
    event GovernanceCreation(address indexed governance, address indexed timelock);

    //----------------- Functions -------------------------
    function enterCommunity(
        int256 _locationLat,
        int256 _locatinoLon,
        string memory _meterId
    ) external;

    /* Setter Functions */
    function setCrowdlendingFactory(address _crowdlendingFactory) external;

    /* Getter Functions */
    function getEpicenter() external view returns (int256, int256);

    function getName() external view returns (string memory);

    function getCommunityItems() external view returns (address);

    function getCrowdlendingFactory() external view returns (address);

    function getTimelock() external view returns (address);

    function getGovernance() external view returns (address);

    function transferOwnership(address newOwner) external;
}
