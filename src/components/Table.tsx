import React, { useEffect, useMemo, useState } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import { Skeleton } from "@mantine/core";

import { getDaysSinceRegistered } from "@/utils";
import { fetchMockData } from "../data/mockDataPromise";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  registeredDate: string;
};

const Table = () => {
  const [data, setData] = useState<User[] | null>(null);
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "firstName", header: "First Name" },
      { accessorKey: "lastName", header: "Last Name" },
      {
        header: "Full Name",
        accessorFn: (row) => `${row.firstName} ${row.lastName}`,
        id: "fullName",
      },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "city", header: "City" },
      { accessorKey: "registeredDate", header: "Registered Date" },
      {
        header: "DSR",
        accessorFn: (row) =>
          `${getDaysSinceRegistered(row.registeredDate)} days`,
        id: "dsr",
      },
    ],
    []
  );

  useEffect(() => {
    fetchMockData().then((result) => setData(result.data));
  }, []);

  const table = useMantineReactTable({
    columns,
    data: data || [],
    enableColumnOrdering: true,
    enableColumnActions: false,
    enableSorting: true,
    enableRowVirtualization: true,
    enableTopToolbar: false,
    enablePagination: false,
    enableBottomToolbar: false,
    mantineTableContainerProps: { style: { maxHeight: 600 } },
  });

  if (!data) {
    return <Skeleton height={600} />;
  }

  return <MantineReactTable table={table} />;
};

export default Table;
