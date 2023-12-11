// Core
import { useNavigate } from "react-router-dom";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { useUser } from "contexts/User.context";
import { useQuery } from "@tanstack/react-query";

// Components
import CrowdloansTable from "./Table";
import { crowdloanFactoryAbi } from "utils/abis";
import { contractAddresses } from "utils/addresses";

export default function ListCrowdloans() {
  const navigate = useNavigate();
  const { chainId: chainIdHex } = useMoralis();
  const { user } = useUser();

  const chainId: string = chainIdHex
    ? parseInt(chainIdHex!).toString()
    : "11155111";

  const { runContractFunction: getCrowdloansByOwner } = useWeb3Contract({
    abi: crowdloanFactoryAbi,
    contractAddress: contractAddresses[chainId]["crowdloanFactory"],
    functionName: "getAllCampaignsByOwner",
    params: { _owner: user },
  });

  const { data }: any = useQuery({
    queryKey: ["Crowdloans"],
    queryFn: async function () {
      const crowdloans = await getCrowdloansByOwner();

      return crowdloans;
    },
  });

  return (
    <main className="lg:pl-72">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Crowdlending Campaigns
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the crowdloans in the community
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => navigate("/new-crowdloan")}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            New Crowdloan
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <CrowdloansTable data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}
