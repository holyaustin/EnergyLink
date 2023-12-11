// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "hardhat/console.sol";

import "../CommunityItems.sol";

/** @title Energy Community Items Factory Contract
 *  @author EcoVerse Team
 *  @notice This factory contract allows creating and tracking community items contract
 */
contract CommunityItemsFactory {
    //----------------- Type declarations -----------------

    //----------------- State variables -------------------
    address[] private s_allCommunityItems;

    //----------------- Events ----------------------------
    event NewCommunityItems(address indexed community);

    //----------------- Modifiers -------------------------

    //----------------- Functions -------------------------
    constructor() {}

    function createCommunityItems() public returns (address communityItemsAddress) {
        CommunityItems newCommunityItems = new CommunityItems("", "", "");
        newCommunityItems.transferOwnership(msg.sender);

        communityItemsAddress = address(newCommunityItems);
        s_allCommunityItems.push(communityItemsAddress);

        emit NewCommunityItems(communityItemsAddress);
    }

    /* Getter Functions */
    function getAllCommunitiesItems() public view returns (address[] memory) {
        return s_allCommunityItems;
    }
}
