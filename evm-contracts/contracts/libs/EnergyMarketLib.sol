// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

library EnergyMarketLib {
    enum sessionStatus {
        OPEN,
        CLOSED,
        CLEARED
    }

    enum offerType {
        BUY,
        SELL
    }

    struct Session {
        uint256 id;
        uint256 startDatetime;
        uint256 pricePerUnit;
        sessionStatus status;
        bool valid;
    }

    struct Transaction {
        address member;
        int energy;
        uint256 sessionId;
    }

    struct Offer {
        address member;
        uint64 pricePerUnit;
        uint256 energyProduced;
        uint256 energyConsumed;
        uint256 datetime;
        offerType offertype;
    }
}
