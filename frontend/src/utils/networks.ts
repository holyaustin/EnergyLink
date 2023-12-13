export enum Networks {
  Hardhat = "Hardhat",
  Sepolia = "Ethereum (Sepolia)",
  Polygon = "Polygon (Mumbai)",
  zkEVM = "zkEVM (testnet)",
  Avalanche = "Avalanche (fuji C Chain)",
}

export enum SupportedChainId {
  SEPOLIA = 11155111,
  HARDHAT = 31337,
  ZKEVM = 1442,
  AVALANCHE = 43113,
}

export const CHAIN_IDS_TO_NETWORKS = {
  [SupportedChainId.SEPOLIA]: Networks.Sepolia,
  [SupportedChainId.HARDHAT]: Networks.Hardhat,
  [SupportedChainId.ZKEVM]: Networks.zkEVM,
  [SupportedChainId.AVALANCHE]: Networks.Avalanche,
};

export const ALL_SUPPORTED_CHAIN_IDS: SupportedChainId[] = Object.values(
  SupportedChainId
).filter((id) => typeof id === "number") as SupportedChainId[];

export function isSupportedChain(
  chainId: number | null | undefined
): chainId is SupportedChainId {
  return !!chainId && !!SupportedChainId[chainId];
}
