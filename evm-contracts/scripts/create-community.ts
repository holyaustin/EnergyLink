import { NAME, EPICENTER_LAT, EPICENTER_LON } from "../constants/community"
import { ethers } from "hardhat"

export async function createCommunity(
    name: string,
    epicenterLat: number,
    epicenterLon: number
): Promise<void> {
    const communityFactory = await ethers.getContract("CommunityFactory")
    const args = [NAME, EPICENTER_LAT, EPICENTER_LON]

    console.log(`Creating community named ${name}...`)
    const transactionResponse = await communityFactory.createCommunity(...args)
    const transactionReceipt = await transactionResponse.wait(1)

    const eventsLength = transactionReceipt.events!.length
    const communityAddress = transactionReceipt.events![eventsLength - 1].args!.community
    console.log(`Community at ${communityAddress}`)
    console.log("----------------------------------------------------")
}

createCommunity(NAME, EPICENTER_LAT, EPICENTER_LON)
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
