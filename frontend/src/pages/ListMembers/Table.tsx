// Core
import { useState, useEffect } from "react";

// Components
import MuiTable from "components/Tables/MuiTable";

// Columns
const defaultColumns = [
  {
    label: "Public Address",
    name: "address",
    options: {
      setCellHeaderProps: () => ({ width: "40%" }),
    },
  },
  {
    label: "Role",
    name: "role",
    options: {
      setCellHeaderProps: () => ({ width: "30%" }),
    },
  },
  {
    label: "Status",
    name: "status",
    options: {
      setCellHeaderProps: () => ({ width: "30%" }),
    },
  },
];

type MembersTableProps = {
  data: string[];
};

type Rows = {
  address: string;
  role: string;
  status: string;
};

export default function MembersTable({ data }: MembersTableProps) {
  // Rows
  const [rows, setRows] = useState<Rows[]>([]);

  useEffect(() => {
    setRows(
      data?.map((address: any) => ({
        address: address,
        role: "CONSUMER",
        status: "ACTIVE",
      }))
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
