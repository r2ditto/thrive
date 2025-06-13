import React, { useMemo } from "react";
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from "mantine-react-table";
import { Loader, Center } from "@mantine/core";

import { getDaysSinceRegistered } from "@/utils";
import { useUsersTable } from "@/hooks/useUsersTable";
import type { User } from "@/types";

const Table = () => {
  const { data, isLoading, tableContainerRef, fetchMoreUsers } =
    useUsersTable();
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
  const table = useMantineReactTable({
    columns,
    data: data,
    enableRowVirtualization: true,
    mantineTableContainerProps: {
      ref: tableContainerRef,
      style: { minHeight: 600, maxHeight: 600 },
      onScroll: fetchMoreUsers,
    },
    state: {
      isLoading,
    },
    enableColumnOrdering: true,
    enableColumnActions: false,
    enableSorting: true,
    enableTopToolbar: false,
    enablePagination: false,
    enableBottomToolbar: false,
  });

  return (
    <>
      <MantineReactTable table={table} />

      {isLoading && data.length > 0 && (
        <Center mt="md">
          <Loader color="white" />
        </Center>
      )}
    </>
  );
};

export default Table;
