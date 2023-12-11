// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "hardhat/console.sol";

import "../interfaces/ITimeLockFactory.sol";

import "../governance/Governance.sol";
import "../governance/TimeLock.sol";
import "../interfaces/ICommunity.sol";

/** @title Energy Community Governance Factory Contract
 *  @author EcoVerse Team
 *  @notice This factory contract allows creating and tracking community governance contracts
 */
contract GovernanceFactory {
    //----------------- Type declarations -----------------

    //----------------- State variables -------------------
    ITimeLockFactory private s_timeLockFactory;

    //----------------- Events ----------------------------
    event NewGovernance(
        address indexed community,
        address indexed governance,
        address indexed timelock
    );

    //----------------- Modifiers -------------------------

    //----------------- Functions -------------------------
    constructor(address _timeLockFactory) {
        s_timeLockFactory = ITimeLockFactory(_timeLockFactory);
    }

    function createGovernance(
        address community,
        address _communityItems,
        uint256 _minDelay,
        uint256 _quorumPercentage,
        uint256 _votingPeriod,
        uint256 _votingDelay
    ) public returns (address timeLockAddress, address governanceAddress) {
        timeLockAddress = s_timeLockFactory.createTimeLock(_minDelay);
        TimeLock timelock = TimeLock(payable(timeLockAddress));

        Governance governance = new Governance(
            IVotes(_communityItems),
            timelock,
            _quorumPercentage,
            _votingPeriod,
            _votingDelay
        );
        governanceAddress = address(governance);

        timelock.grantRole(timelock.EXECUTOR_ROLE(), address(0));
        timelock.grantRole(timelock.PROPOSER_ROLE(), governanceAddress);
        timelock.revokeRole(timelock.TIMELOCK_ADMIN_ROLE(), address(this));

        ICommunity(community).transferOwnership(timeLockAddress);

        emit NewGovernance(community, governanceAddress, timeLockAddress);
    }

    /* Getter Functions */
}
