// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/governance/TimelockController.sol";

interface ITimeLock {
    function grantRole(bytes32 role, address account) external;

    function revokeRole(bytes32 role, address account) external;

    function PROPOSER_ROLE() external returns (bytes32);

    function EXECUTOR_ROLE() external returns (bytes32);

    function TIMELOCK_ADMIN_ROLE() external returns (bytes32);
}
