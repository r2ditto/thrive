import { Container } from "@mantine/core";
import Table from "../components/Table";

export default function Home() {
  return (
    <main>
      <Container fluid style={{ paddingTop: 100, paddingBottom: 100 }}>
        <Table />
      </Container>
    </main>
  );
}
