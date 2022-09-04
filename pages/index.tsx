import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Banner from "../components/Banner";
import Trendings from "../components/Trendings";
import { client } from '../utils/client';


const Home: NextPage<any>= ({ banners,games }) => {
  console.log(games);
  
  return (
    <Container>
      <Banner banners={banners} />
      {/* Trendings */}
      <Trendings games={games} />
      {/* User comments */}

      {/* Bestsellers */}

      {/* Gamer Reveiws */}

      {/* Categories */}
    </Container>
  );
};

export async function getServerSideProps() {
  const banners = await client.fetch(`*[_type == "banners"]`);
  const games = await client.fetch(`*[_type == "games"]`);
  return {
    props: {
      banners,
      games
    }
  }
}

export default Home;
