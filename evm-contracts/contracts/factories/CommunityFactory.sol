// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./CommunityItemsFactory.sol";

import "../Community.sol";

/** @title Energy Community Factory Contract
 *  @author EcoVerse Team
 *  @notice This factory contract allows creating and tracking the Community contract
 */
contract CommunityFactory {
    //----------------- Type declarations -----------------

    //----------------- State variables -------------------
    CommunityItemsFactory private s_communityItemsFactory;

    mapping(address => address) private s_communities; // participant address -> community address

    //----------------- Events ----------------------------
    event NewCommunity(
        address indexed community,
        address communityItems,
        int256 epicenterLon,
        int256 epicenterLat
    );

    //----------------- Modifiers -------------------------

    //----------------- Functions -------------------------
    constructor(address _communityItemsFactory) {
        s_communityItemsFactory = CommunityItemsFactory(_communityItemsFactory);
    }

    function createCommunity(
        string memory _name,
        int256 _epicenterLon,
        int256 _epicenterLat
    ) public {
        address communityItemsAddress = s_communityItemsFactory.createCommunityItems();
        ICommunityItems communityItems = ICommunityItems(communityItemsAddress);

        Community newCommunity = new Community(
            _name,
            _epicenterLon,
            _epicenterLat,
            msg.sender,
            communityItemsAddress
        );
        address communityAddress = address(newCommunity);

        s_communities[msg.sender] = communityAddress;

        communityItems.mintCreatorMembership(msg.sender);
        ICommunityItems(communityItemsAddress).transferOwnership(communityAddress);

        emit NewCommunity(communityAddress, communityItemsAddress, _epicenterLon, _epicenterLat);
    }

    /* Getter Functions */
    function getCommunity() public view returns (address) {
        return s_communities[msg.sender];
    }
}
