import "@typechain/hardhat"
import "@nomiclabs/hardhat-waffle"
import "@nomiclabs/hardhat-etherscan"
import "@nomiclabs/hardhat-ethers"
import "@openzeppelin/hardhat-upgrades"
import "hardhat-contract-sizer"
import "hardhat-gas-reporter"
import "dotenv/config"
import "solidity-coverage"
import "hardhat-deploy"
import "solidity-coverage"
import "./tasks"
import { HardhatUserConfig } from "hardhat/config"

/* RPC URLs */
const MAINNET_RPC_URL =
    process.env.MAINNET_RPC_URL ||
    process.env.ALCHEMY_MAINNET_RPC_URL ||
    "https://eth-mainnet.alchemyapi.io/v2/your-api-key"
const POLYGON_MAINNET_RPC_URL =
    process.env.POLYGON_MAINNET_RPC_URL || "https://polygon-mainnet.alchemyapi.io/v2/your-api-key"
const AVAX_RPC_URL = process.env.AVAX_RPC_URL
const ZKEVM_RPC_URL = process.env.ZKEVM_RPC_URL
const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL || ""

/* Wallet KEYs */
const PRIVATE_KEY = process.env.PRIVATE_KEY

/* API KEYs */
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "Your etherscan API key"
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "Your polygonscan API key"
const ZKEVM_POLYSCAN_API_KEY = process.env.ZKEVM_POLYSCAN_API_KEY || "Your zkevm API key"

/* Others */

const config: HardhatUserConfig = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            hardfork: "merge",
            forking: {
                url: MAINNET_RPC_URL,
                enabled: false,
            },
            chainId: 31337,
            allowUnlimitedContractSize: true,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            chainId: 31337,
            allowUnlimitedContractSize: true,
        },
        avax: {
            url: AVAX_RPC_URL !== undefined ? AVAX_RPC_URL : "",
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 43113,
            allowUnlimitedContractSize: true,
        },
        mainnet: {
            url: MAINNET_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 1,
        },
        mumbai: {
            url: MUMBAI_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 80001,
            allowUnlimitedContractSize: true,
        },
        zkevm: {
            url: ZKEVM_RPC_URL,
            accounts: PRIVATE_KEY !== undefined ? [PRIVATE_KEY] : [],
            saveDeployments: true,
            chainId: 1442,
        },
    },
    etherscan: {
        apiKey: {
            zkevm: ZKEVM_POLYSCAN_API_KEY,
            mainnet: ETHERSCAN_API_KEY,
            polygon: POLYGONSCAN_API_KEY,
        },
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS !== undefined,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
        feeCollector: {
            default: 1,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.9",
            },
            {
                version: "0.7.0",
            },
            {
                version: "0.4.24",
            },
        ],
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
                details: { yul: false },
              },
        },
    },
    contractSizer: {
        runOnCompile: false,
        only: ["FunctionsConsumer", "AutomatedFunctionsConsumer", "FunctionsBillingRegistry"],
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },
    typechain: {
        outDir: "typechain",
        target: "ethers-v5",
    },
}

export default config
