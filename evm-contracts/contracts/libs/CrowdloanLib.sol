// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

library CrowdloanLib {
    enum CrowdloanState {
        OPEN,
        LAUNCHED,
        COMPLETED
    }

    struct Campaign {
        address creator;
        uint32 apy;
        uint goal;
        uint pledged;
        uint startAt;
        uint endAt;
        bool claimed;
    }
}
