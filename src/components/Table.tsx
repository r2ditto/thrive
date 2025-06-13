import React, { useMemo } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import mockData from "../data/mock_data.json";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  registeredDate: string;
};

export default function Table() {
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      { accessorKey: "id", header: "ID" },
      { accessorKey: "firstName", header: "First Name" },
      { accessorKey: "lastName", header: "Last Name" },
      { accessorKey: "email", header: "Email" },
      { accessorKey: "city", header: "City" },
      { accessorKey: "registeredDate", header: "Registered Date" },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data: mockData.data,
    enableColumnOrdering: true,
    enableSorting: true,
    enableRowVirtualization: true,
    enableTopToolbar: false,
    enablePagination: false,
    enableBottomToolbar: false,
    mantineTableContainerProps: { style: { maxHeight: 600 } },
  });

  return <MantineReactTable table={table} />;
}
