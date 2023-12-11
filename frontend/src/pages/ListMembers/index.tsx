// Core
import { useUser } from "contexts/User.context";
import { useNavigate } from "react-router-dom";
import { useWeb3Contract } from "react-moralis";
import { useQuery } from "@tanstack/react-query";

// Components
import MembersTable from "./Table";

// Utils
import { communityAbi } from "utils/abis";

export default function ListMembers() {
  const navigate = useNavigate();

  const { community } = useUser();

  const { runContractFunction: getMembers } = useWeb3Contract({
    abi: communityAbi,
    contractAddress: community,
    functionName: "getMembers",
    params: {},
  });

  const { data }: any = useQuery({
    queryKey: ["Members"],
    queryFn: async function () {
      const members = await getMembers();
      return members;
    },
  });

  return (
    <main className="lg:pl-72">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Members
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the members in the community
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => navigate("/new-member")}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            New Member
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <MembersTable data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}
