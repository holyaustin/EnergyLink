function calculateIntermediateMarketRate(buyOffers, sellOffers, alpha) {
    let minArray = buyOffers.map((offer) => offer.price)
    let maxArray = sellOffers.map((offer) => offer.price)

    let minBuy = Math.min(...minArray)
    let maxSell = Math.min(...maxArray)

    alpha = alpha / 100
    let price = alpha * minBuy + (1 - alpha) * maxSell

    return price
}

function calculateMidMarketRate(buyOffers, sellOffers) {
    let minArray = buyOffers.map((offer) => offer.price)
    let maxArray = sellOffers.map((offer) => offer.price)

    let minBuy = Math.min(...minArray)
    let maxSell = Math.min(...maxArray)

    let price = (minBuy + maxSell) / 2

    return price
}
