import { Container } from "@mantine/core";

import Table from "@/components/Table";
import BlurText from "@/components/BlurText";

export default function Home() {
  return (
    <main>
      <Container fluid style={{ paddingTop: 50, paddingBottom: 100 }}>
        <BlurText
          text="Stable. Reliable. Table. 🫠"
          delay={150}
          animateBy="words"
          direction="top"
        />

        <Table />
      </Container>
    </main>
  );
}
