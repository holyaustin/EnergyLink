// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Functions, FunctionsClient} from "./dev/functions/FunctionsClient.sol";
import {ConfirmedOwner} from "@chainlink/contracts/src/v0.8/ConfirmedOwner.sol";
import {AutomationCompatibleInterface} from "@chainlink/contracts/src/v0.8/AutomationCompatible.sol";
import "hardhat/console.sol";

/* Errors */

contract EnergyMarket is FunctionsClient, ConfirmedOwner, AutomationCompatibleInterface {
    //----------------- Type declarations -----------------
    using Functions for Functions.Request;

    //----------------- State variables -------------------
    bytes public requestCBOR;
    bytes32 public latestRequestId;
    bytes public latestResponse;
    bytes public latestError;
    uint64 private s_subscriptionId;
    uint32 private s_fulfillGasLimit;
    uint256 private s_updateInterval;
    uint256 private s_lastUpkeepTimeStamp;
    uint256 public upkeepCounter;
    uint256 public responseCounter;

    //----------------- Events ----------------------------
    event OCRResponse(bytes32 indexed requestId, bytes result, bytes err);

    //----------------- Modifiers -------------------------

    //----------------- Functions -------------------------
    constructor(
        address oracle,
        uint64 _subscriptionId,
        uint32 _fulfillGasLimit,
        uint256 _updateInterval
    ) FunctionsClient(oracle) ConfirmedOwner(msg.sender) {
        s_updateInterval = _updateInterval;
        s_subscriptionId = _subscriptionId;
        s_fulfillGasLimit = _fulfillGasLimit;
        s_lastUpkeepTimeStamp = block.timestamp;
    }

    function generateRequest(
        string calldata source,
        bytes calldata secrets,
        string[] calldata args
    ) public pure returns (bytes memory) {
        Functions.Request memory req;
        req.initializeRequest(Functions.Location.Inline, Functions.CodeLanguage.JavaScript, source);
        if (secrets.length > 0) {
            req.addRemoteSecrets(secrets);
        }
        if (args.length > 0) req.addArgs(args);

        return req.encodeCBOR();
    }

    function setRequest(
        uint64 _subscriptionId,
        uint32 _fulfillGasLimit,
        uint256 _updateInterval,
        bytes calldata newRequestCBOR
    ) external onlyOwner {
        s_updateInterval = _updateInterval;
        s_subscriptionId = _subscriptionId;
        s_fulfillGasLimit = _fulfillGasLimit;
        requestCBOR = newRequestCBOR;
    }

    function checkUpkeep(
        bytes memory
    ) public view override returns (bool upkeepNeeded, bytes memory) {
        upkeepNeeded = (block.timestamp - s_lastUpkeepTimeStamp) > s_updateInterval;
    }

    function performUpkeep(bytes calldata) external override {
        (bool upkeepNeeded, ) = checkUpkeep("");
        require(upkeepNeeded, "Time interval not met");
        s_lastUpkeepTimeStamp = block.timestamp;
        upkeepCounter = upkeepCounter + 1;

        bytes32 requestId = s_oracle.sendRequest(s_subscriptionId, requestCBOR, s_fulfillGasLimit);

        s_pendingRequests[requestId] = s_oracle.getRegistry();
        emit RequestSent(requestId);
        latestRequestId = requestId;
    }

    function fulfillRequest(
        bytes32 requestId,
        bytes memory response,
        bytes memory err
    ) internal override {
        latestResponse = response;
        latestError = err;
        responseCounter = responseCounter + 1;
        emit OCRResponse(requestId, response, err);
    }

    function updateOracleAddress(address oracle) public onlyOwner {
        setOracle(oracle);
    }

    /* Getter Functions */
    function getLastUpkeepTimeStamp() public view returns (uint256) {
        return s_lastUpkeepTimeStamp;
    }

    function getUpdateInterval() public view returns (uint256) {
        return s_updateInterval;
    }
}
