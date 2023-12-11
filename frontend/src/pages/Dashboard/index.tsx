// Core
import { useUser } from "contexts/User.context";
import { useWeb3Contract } from "react-moralis";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Components
import DefaultLineChart from "components/Charts/DefaultLineChart";
import StatsCard from "./StatsCard";
import Nav from "./Nav";

// Utils
import { communityAbi } from "utils/abis";

const defaultStats = [
  { name: "Number of Members", value: 0 },
  {
    name: "Governance Proposals",
    value: "0",
  },
  {
    name: "Funds Raised",
    value: "0 $",
  },
  {
    name: "CO2 Emissions Avoided",
    value: "0 tCO2",
  },
];

const labels = Array.from({ length: 7 * 24 }, (_, i) => {
  const d = new Date();
  d.setHours(d.getHours() - i);
  return d.toLocaleString();
}).reverse();

const data = Array.from({ length: 7 * 24 }, () =>
  Math.floor(Math.random() * 100)
);

const chartData = {
  labels: labels,
  datasets: [
    {
      label: "Volume",
      data: data,
      borderColor: "rgb(96, 165, 109)",
      backgroundColor: "rgba(96, 165, 109, 0.5)",
      yAxisID: "y",
    },
  ],
};

const Dashboard = () => {
  const { community } = useUser();

  const [stats, setStats] = useState<any>(defaultStats);

  const { runContractFunction: getMembers } = useWeb3Contract({
    abi: communityAbi,
    contractAddress: community,
    functionName: "getMembers",
    params: {},
  });

  /*eslint-disable-next-line*/
  const _getMembersByCommunityQuery = useQuery({
    queryKey: ["Members"],
    queryFn: async function () {
      const members = await getMembers();
      return members;
    },
    onSuccess: (data: any) => {
      setStats([
        { name: "Number of Members", value: data.length.toString() },
        ...defaultStats.slice(1),
      ]);
    },
  });

  return (
    <div className="lg:pl-72">
      {/* Secondary navigation */}
      <header className="pb-4 pt-6 sm:pb-6">
        <Nav />
      </header>

      {/* Stats */}
      <div className="border-b border-b-gray-900/10 lg:border-t lg:border-t-gray-900/5">
        <dl className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
          {stats.map((stat, statIdx) => (
            <StatsCard
              key={statIdx}
              statIdx={statIdx}
              name={stat.name}
              value={stat.value}
            />
          ))}
        </dl>
      </div>

      {/* Graphs */}
      <div className="space-y-16 py-16 xl:space-y-20">
        <div>
          <div className="mr-auto max-w-7xl px-4 pb-6">
            <h2 className="mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none">
              Charts
            </h2>
          </div>
          <div>
            <DefaultLineChart
              title="Volume of energy traded locally"
              description="This is a line chart showing the evolution of energy traded among community members."
              chart={chartData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
