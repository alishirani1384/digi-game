import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Banner from "../components/Banner";
import Support from "../components/Support";
import Trendings from "../components/Trendings";
import Users from "../components/Users";
import { client } from '../utils/client';


const Home: NextPage<any>= ({ banners,games }) => {
  
  
  return (
    <div>
      <Banner banners={banners} />
      {/* Trendings */}
      <Trendings games={games} />
      <Support/>
      {/* User comments */}
      <Users/>
      {/* Bestsellers */}

      {/* Gamer Reveiws */}

      {/* Categories */}
    </div>
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
