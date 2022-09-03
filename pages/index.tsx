import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <Container>
      <Banner />
    </Container>
  );
};

export default Home;
