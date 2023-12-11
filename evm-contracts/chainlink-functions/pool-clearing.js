function poolCalculateEquilibrium(buyOffers, sellOffers) {
    let buyPrice = buyOffers[0].price
    let buyEnergyQuantity = buyOffers[0].energy
    let buyIndex = 0

    let sellPrice = sellOffers[0].price
    let sellEnergyQuantity = Math.abs(sellOffers[0].energy)
    let sellIndex = 0

    let clearingPrice = -1
    let energyQuantity = 0

    while (true) {
        if (buyEnergyQuantity > sellEnergyQuantity) {
            sellIndex++
            if (sellIndex < sellOffers.length) {
                let newSellEnergyQuantity =
                    sellEnergyQuantity + Math.abs(sellOffers[sellIndex].energy)
                let newSellPrice = sellOffers[sellIndex].price

                if (buyPrice < newSellPrice) {
                    clearingPrice = sellEnergyQuantity > buyEnergyQuantity ? sellPrice : buyPrice
                    energyQuantity = sellEnergyQuantity
                    break
                } else {
                    sellEnergyQuantity = newSellEnergyQuantity
                    sellPrice = newSellPrice
                }
            } else {
                clearingPrice = buyPrice
                energyQuantity = sellEnergyQuantity
                break
            }
        } else {
            buyIndex++
            if (buyIndex < buyOffers.length) {
                let newBuyEnergyQuantity = buyEnergyQuantity + Math.abs(buyOffers[buyIndex].energy)
                let newBuyPrice = buyOffers[buyIndex].price

                if (newBuyPrice < sellPrice) {
                    clearingPrice = sellEnergyQuantity > buyEnergyQuantity ? sellPrice : buyPrice
                    energyQuantity = buyEnergyQuantity
                    break
                } else {
                    buyEnergyQuantity = newBuyEnergyQuantity
                    buyPrice = newBuyPrice
                }
            } else {
                clearingPrice = sellPrice
                energyQuantity = buyEnergyQuantity
                break
            }
        }
    }
    return [clearingPrice, energyQuantity]
}
