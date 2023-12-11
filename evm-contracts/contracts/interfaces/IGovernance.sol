// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IGovernance {
    function votingDelay() external view returns (uint256);

    function votingPeriod() external view returns (uint256);

    function quorum(uint256 blockNumber) external view returns (uint256);

    function state(uint256 proposalId) external view returns (uint256);

    function propose(
        address[] memory targets,
        uint256[] memory values,
        bytes[] memory calldatas,
        string memory description
    ) external returns (uint256);

    function proposalThreshold() external view returns (uint256);

    function supportsInterface(bytes4 interfaceId) external view returns (bool);
}
