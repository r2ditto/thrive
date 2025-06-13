import { Container, Skeleton } from "@mantine/core";

import Table from "@/components/Table";
import BlurText from "@/components/BlurText";
import { useUsersTable } from "@/hooks/useUsersTable";

export default function Home() {
  const { data, isLoading, tableContainerRef, fetchMoreUsers } =
    useUsersTable();

  return (
    <main>
      <Container fluid style={{ paddingTop: 50, paddingBottom: 100 }}>
        <BlurText
          text="Stable. Reliable. Table. 🫠"
          delay={150}
          animateBy="words"
          direction="top"
        />

        {isLoading && data.length === 0 ? (
          <Skeleton height={600} mt="md" />
        ) : (
          <Table
            data={data}
            isLoading={isLoading}
            tableContainerRef={tableContainerRef}
            fetchMoreUsers={fetchMoreUsers}
          />
        )}
      </Container>
    </main>
  );
}
