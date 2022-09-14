import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Banner from "../components/Banner";
import Support from "../components/Support";
import Trendings from "../components/Trendings";
import Users from "../components/Users";
import { BannerProp } from "../types";
import { client } from '../utils/client';

interface Ihome{
  banners: BannerProp[],
  games:any
}

const Home: NextPage<Ihome>= ({ banners,games }) => {
  console.log(games);
  
  
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
  const bannerQuery = `*[_type=="banners"]{
    name,
    image{
      asset{
        _ref
      }
    }
  }`;
  const gamesQuery =`*[_type=="games"]{
    banner{
      asset{
        _ref
      }
    },
    description,
    images,
    price,
    slug{
      current
    },
    title,
    video{
      asset{
        _ref
      }
    }
  }`
  const banners = await client.fetch(bannerQuery);
  const games = await client.fetch(gamesQuery);
  return {
    props: {
      banners,
      games
    }
  }
}

export default Home;
