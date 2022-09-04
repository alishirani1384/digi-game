import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Banner from "../components/Banner";
import { client } from '../utils/client';
import { BannerProp } from "../types";


const Home: NextPage<any>= ({ banners }) => {
  console.log(banners);
  
  return (
    <Container>
      <Banner banners={banners} />
    </Container>
  );
};

export async function getServerSideProps() {
  const banners = await client.fetch(`*[_type == "banners"]`);
  return {
    props: {
      banners
    }
  }
}

export default Home;
