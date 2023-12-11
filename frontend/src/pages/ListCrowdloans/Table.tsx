// Core
import { useState, useEffect } from "react";
import { BigNumber } from "ethers";

// Components
import MuiTable from "components/Tables/MuiTable";

// Utils
import { Campaign, crowdloanStateToLabel } from "utils/types/crowdloans.types";
import { BigNumberToDate } from "utils/time";

// Columns
const defaultColumns = [
  {
    label: "Contract Address",
    name: "address",
    options: {
      setCellHeaderProps: () => ({ width: "10%" }),
    },
  },
  {
    label: "Activation Date",
    name: "activationDate",
    options: {
      setCellHeaderProps: () => ({ width: "10%" }),
    },
  },
  {
    label: "Expiration Date",
    name: "expirationDate",
    options: {
      setCellHeaderProps: () => ({ width: "10%" }),
    },
  },
  {
    label: "Asset",
    name: "asset",
    options: {
      setCellHeaderProps: () => ({ width: "10%" }),
    },
  },
  {
    label: "APY (%)",
    name: "apy",
    options: {
      setCellHeaderProps: () => ({ width: "10%" }),
    },
  },
  {
    label: "Goal",
    name: "goal",
    options: {
      setCellHeaderProps: () => ({ width: "10%" }),
    },
  },
  {
    label: "Loaned",
    name: "loaned",
    options: {
      setCellHeaderProps: () => ({ width: "10%" }),
    },
  },
  {
    label: "Status",
    name: "status",
    options: {
      setCellHeaderProps: () => ({ width: "10%" }),
    },
  },
  {
    label: "Message",
    name: "message",
    options: {
      setCellHeaderProps: () => ({ width: "10%" }),
    },
  },
];

type Data = {
  _campaigns: Campaign[];
  _crowdloans: string[];
  _states: number[];
};

type CrowdloansTableProps = {
  data: Data;
};

type Rows = {
  address: string;
  activationDate: string;
  expirationDate: string;
  asset: string;
  apy: string;
  goal: string;
  loaned: string;
  claimed: boolean;
  status: string;
  message: string;
};

export default function CrowdloansTable({ data }: CrowdloansTableProps) {
  // Rows
  const [rows, setRows] = useState<Rows[]>([]);

  useEffect(() => {
    setRows(
      data?._crowdloans?.map((address: any, index: number) => {
        const startAt = data._campaigns[index].startAt;
        const endAt = data._campaigns[index].endAt;
        return {
          address: address,
          activationDate: BigNumberToDate(startAt).toString(),
          expirationDate: BigNumberToDate(endAt).toString(),
          asset: "ECO Mock",
          apy: (data._campaigns[index].apy as BigNumber).toString(),
          goal: (data._campaigns[index].goal as BigNumber).toString(),
          loaned: (data._campaigns[index].pledged as BigNumber).toString(),
          claimed: data._campaigns[index].claimed,
          status: crowdloanStateToLabel[data._states[index]],
          message: "2 days to claim",
        };
      })
    );
  }, [data]);

  return (
    <MuiTable
      table={{
        columns: defaultColumns,
        rows,
      }}
      canSearch
    />
  );
}
