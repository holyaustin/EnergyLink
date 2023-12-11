// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";
import "./token/ERC1155Votes.sol";

/* Errors */
error CommunityItems__MemberAlreadyHasThisMembership();

contract CommunityItems is ERC1155Votes, Ownable {
    //----------------- Type declarations -----------------

    //----------------- State variables -------------------
    uint256 public constant CREATOR_MEMBERSHIP = 0;
    uint256 public constant CONSUMER_MEMBERSHIP = 1;
    uint256 public constant PROSUMER_MEMBERSHIP = 2;
    uint256 public constant INVESTOR_MEMBERSHIP = 3;
    uint256 public constant EXTERNAL_MEMBERSHIP = 4;

    //----------------- Events ----------------------------

    //----------------- Modifiers -------------------------

    //----------------- Functions -------------------------
    constructor(
        string memory _uri,
        string memory _name,
        string memory _version
    ) ERC1155Votes(_uri) EIP712(_name, _version) {}

    function mintMembership(address _member, uint256 _membershipId) private onlyOwner {
        if (balanceOf(_member, _membershipId) > 0) {
            revert CommunityItems__MemberAlreadyHasThisMembership();
        }
        _mint(_member, _membershipId, 1, "0x000");
        _delegate(_member, _member);
    }

    function mintCreatorMembership(address _creator) public onlyOwner {
        mintMembership(_creator, CREATOR_MEMBERSHIP);
    }

    function mintConsumerMembership(address _member) public onlyOwner {
        mintMembership(_member, CONSUMER_MEMBERSHIP);
    }

    function mintProsumerMembership(address _member) public onlyOwner {
        mintMembership(_member, PROSUMER_MEMBERSHIP);
    }

    function mintInvestorMembership(address _member) public onlyOwner {
        mintMembership(_member, INVESTOR_MEMBERSHIP);
    }

    function mintExternalMembership(address _external) public onlyOwner {
        mintMembership(_external, EXTERNAL_MEMBERSHIP);
    }

    function getIds() public pure returns (uint256[5] memory) {
        return [
            CREATOR_MEMBERSHIP,
            CONSUMER_MEMBERSHIP,
            INVESTOR_MEMBERSHIP,
            INVESTOR_MEMBERSHIP,
            EXTERNAL_MEMBERSHIP
        ];
    }

    /**
     * @dev Returns the voting units of `account`.
     */
    function _getVotingUnits(
        address account
    ) internal view override returns (uint256 totalBalance) {
        uint256[5] memory ids = getIds();
        for (uint256 i = 0; i < ids.length; i++) {
            totalBalance += balanceOf(account, ids[i]);
        }
    }
}
