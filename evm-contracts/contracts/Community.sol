// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";

import "./CommunityItems.sol";

import "./interfaces/ICrowdloanFactory.sol";
import "./interfaces/IGovernance.sol";
import "./interfaces/ITimeLock.sol";
import "./interfaces/ICommunityItems.sol";

/* Errors */
error Community__MemberIsInCommunity();

/** @title Energy Community Contract
 *  @author EcoVerse
 *  @notice This contract is for creating a decentalized energy community
 */
contract Community is Ownable {
    //----------------- Type declarations -----------------
    enum MemberType {
        CONSUMER,
        PROSUMER,
        INVESTOR,
        EXTERNAL
    }

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
        MemberType memberType;
        MemberStatus status;
    }

    //----------------- State variables -------------------
    string private i_name;
    Location private i_epicenter;
    ICommunityItems private i_communityItems;
    ITimeLock private s_timeLock;
    IGovernance private s_governance;
    ICrowdloanFactory private s_crowdlendingFactory;

    mapping(address => Member) private s_members; // member -> details

    //----------------- Temp variables (for indexer) ------
    address[] private s_members_array; // array of members

    //----------------- Events ----------------------------
    event MemberEnter(address indexed member);
    event GovernanceCreation(address indexed governance, address indexed timelock);

    //----------------- Modifiers -------------------------

    //----------------- Functions -------------------------
    constructor(
        string memory _name,
        int256 _epicenterLat,
        int256 _epicenterLon,
        address _creator,
        address _communityItems
    ) {
        i_name = _name;
        i_epicenter = Location(_epicenterLat, _epicenterLon);

        i_communityItems = ICommunityItems(_communityItems);

        transferOwnership(_creator);
    }

    function enterCommunity(
        address _member,
        int256 _locationLat,
        int256 _locatinoLon,
        string memory _meterId,
        MemberType _memberType
    ) public onlyOwner {
        Member memory newMember = s_members[_member];

        if (newMember.status != MemberStatus.INACTIVE) {
            revert Community__MemberIsInCommunity();
        }
        s_members[_member] = Member(
            Location(_locationLat, _locatinoLon),
            _meterId,
            _memberType,
            MemberStatus.ACTIVE
        );

        s_members_array.push(_member);
        _mintMembership(_member, _memberType);
    }

    function _mintMembership(address _member, MemberType _memberType) internal {
        if (_memberType == MemberType.CONSUMER) {
            i_communityItems.mintConsumerMembership(_member);
        } else if (_memberType == MemberType.PROSUMER) {
            i_communityItems.mintProsumerMembership(_member);
        } else if (_memberType == MemberType.INVESTOR) {
            i_communityItems.mintInvestorMembership(_member);
        } else if (_memberType == MemberType.EXTERNAL) {
            i_communityItems.mintExternalMembership(_member);
        }
    }

    /* Setter Functions */
    function setCrowdlendingFactory(address _crowdlendingFactory) public onlyOwner {
        s_crowdlendingFactory = ICrowdloanFactory(_crowdlendingFactory);
    }

    function setGovernance(address _governance) public onlyOwner {
        s_governance = IGovernance(_governance);
    }

    function setTimeLock(address _timeLock) public onlyOwner {
        s_timeLock = ITimeLock(_timeLock);
    }

    /* Getter Functions */
    function getEpicenter() public view returns (int256, int256) {
        return (i_epicenter.lat, i_epicenter.lon);
    }

    function getName() public view returns (string memory) {
        return i_name;
    }

    function getCommunityItems() public view returns (address) {
        return address(i_communityItems);
    }

    function getCrowdlendingFactory() public view returns (address) {
        return address(s_crowdlendingFactory);
    }

    function getTimelock() public view returns (address) {
        return address(s_timeLock);
    }

    function getGovernance() public view returns (address) {
        return address(s_governance);
    }

    function getMember(address _member) public view returns (Member memory) {
        return s_members[_member];
    }

    /* Temp Getter Functions (for indexer) */
    function getMembers() public view returns (address[] memory) {
        return s_members_array;
    }

    fallback() external payable {}

    receive() external payable {}
}
