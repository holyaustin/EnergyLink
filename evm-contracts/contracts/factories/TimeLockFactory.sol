// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/governance/utils/IVotes.sol";
import "hardhat/console.sol";

import "../governance/Governance.sol";
import "../governance/TimeLock.sol";
import "../Community.sol";

/** @title Energy Community TimeLock Factory Contract
 *  @author EcoVerse
 *  @notice This factory contract allows creating and tracking TimeLock contracts
 */
contract TimeLockFactory {
    //----------------- Type declarations -----------------

    //----------------- State variables -------------------

    //----------------- Events ----------------------------
    event NewTimeLock(address indexed timeLockAddress);

    //----------------- Modifiers -------------------------

    //----------------- Functions -------------------------
    constructor() {}

    function createTimeLock(uint256 _minDelay) public returns (address timeLockAddress) {
        address[] memory proposers;
        address[] memory executors;
        TimeLock timeLock = new TimeLock(_minDelay, proposers, executors, address(this));

        timeLockAddress = address(timeLock);
        emit NewTimeLock(timeLockAddress);
    }

    /* Getter Functions */
}
