import fs from "fs"
import { DeployFunction } from "hardhat-deploy/types"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import path from "path"

const ABIS_PATH = path.resolve(__dirname, "../..", "frontend", "src", "utils", "abis")
const ADDRESSES_PATH = path.resolve(__dirname, "../..", "frontend", "src", "utils", "addresses")

const FRONTEND_END_ADDRESSES_FILE = path.resolve(ADDRESSES_PATH, "contractAddresses.json")

const CROWDLOAN_FACTORY_FRONTEND_END_ABI_FILE = path.resolve(ABIS_PATH, "crowdloanFactoryAbi.json")

const COMMUNITY_FACTORY_FRONTEND_END_ABI_FILE = path.resolve(ABIS_PATH, "communityFactoryAbi.json")

const COMMUNITY_FRONTEND_END_ABI_FILE = path.resolve(ABIS_PATH, "communityAbi.json")

const updateUI: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { network, ethers } = hre
    const chainId = network.config.chainId?.toString()!

    if (process.env.UPDATE_FRONTEND) {
        // Contract Addresses file
        console.log("Writing to front end contract addresses...")
        const crowdloanFactory = await ethers.getContract("CrowdloanFactory")
        const communityFactory = await ethers.getContract("CommunityFactory")

        let contractAddresses
        try {
            const parsedData = JSON.parse(fs.readFileSync(FRONTEND_END_ADDRESSES_FILE, "utf8"))
            contractAddresses =
                typeof parsedData === "object" && !Array.isArray(parsedData) ? parsedData : {}
        } catch (error) {
            contractAddresses = {}
        }

        if (contractAddresses && chainId in contractAddresses) {
            if (!Object.values(contractAddresses[chainId]).includes(crowdloanFactory.address)) {
                contractAddresses[chainId]["crowdloanFactory"] = crowdloanFactory.address
            }

            if (!Object.values(contractAddresses[chainId]).includes(communityFactory.address)) {
                contractAddresses[chainId]["communityFactory"] = communityFactory.address
            }
        } else {
            contractAddresses[chainId] = {
                crowdlendingFactory: crowdloanFactory.address,
                communityFactory: communityFactory.address,
            }
        }

        if (chainId === "31337") {
            const erc20Mock = await ethers.getContract("ERC20Mock")
            contractAddresses[chainId]["erc20Mock"] = erc20Mock.address
        }
        fs.writeFileSync(FRONTEND_END_ADDRESSES_FILE, JSON.stringify(contractAddresses))

        // ABI files
        console.log("Writing to front end contracts ABIs...")

        const crowdlendingFactoryFormattedData = crowdloanFactory.interface.format(
            ethers.utils.FormatTypes.json
        )
        const communityFactoryFormattedData = communityFactory.interface.format(
            ethers.utils.FormatTypes.json
        )
        !Array.isArray(crowdlendingFactoryFormattedData) &&
            fs.writeFileSync(
                CROWDLOAN_FACTORY_FRONTEND_END_ABI_FILE,
                crowdlendingFactoryFormattedData
            )
        !Array.isArray(communityFactoryFormattedData) &&
            fs.writeFileSync(COMMUNITY_FACTORY_FRONTEND_END_ABI_FILE, communityFactoryFormattedData)

        const abi = JSON.parse(
            fs.readFileSync(
                path.resolve(
                    __dirname,
                    "..",
                    "artifacts",
                    "contracts",
                    "Community.sol",
                    "Community.json"
                ),
                "utf8"
            )
        ).abi
        fs.writeFileSync(COMMUNITY_FRONTEND_END_ABI_FILE, JSON.stringify(abi, null, 2))

        console.log("Front end written!")
    }
}

export default updateUI
updateUI.tags = ["all", "core", "frontend"]
