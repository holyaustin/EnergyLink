// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/** @title Energy Community TimeLock Factory Interface
 *  @author EcoVerse
 */
interface ITimeLockFactory {
    /** @notice Event emitted when a new TimeLock contract is created */
    event NewTimeLock(address indexed timeLockAddress);

    /** @notice Creates a new TimeLock contract
     * @param _minDelay The minimum delay for the TimeLock contract
     * @return timeLockAddress The address of the newly created TimeLock contract
     */
    function createTimeLock(uint256 _minDelay) external returns (address timeLockAddress);
}
