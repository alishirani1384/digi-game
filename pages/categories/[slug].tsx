import { BackgroundImage, Badge, Button, Center, Container, Group, Spoiler } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { urlFor } from "../../lib/sanity";
import { client } from "../../utils/client";
import { PortableText } from "@portabletext/react";
import { FaRegHeart, FaSteam, FaDownload, FaFireAlt } from "react-icons/fa";
import {RiShoppingBag3Line} from 'react-icons/ri'

const GamePage = ({ game }: any) => {
  console.log(game);
  
  return (
    <>
      <div>
        <BackgroundImage
          src={urlFor(game[0].banner.asset._ref).url()}
          className="h-60 absolute top-0 left-0">
          <Center className="absolute -bottom-1/3 left-1/2 -translate-x-2/4">
            <Image
              src={urlFor(game[0].images[0].asset._ref).url()}
              width="200px"
              height="200px"
              className="rounded-lg"
              objectFit="cover"
              alt={game[0].title}
            />
          </Center>
        </BackgroundImage>
      </div>
      <div className="mt-72 mb-32">
        <h2 className="flex items-center justify-between w-fit mx-auto">
          {game[0].title}{" "}
          <span>
            <FaRegHeart color="#FF5400" className="ml-3" />
          </span>
        </h2>
        <Group position="center" my={20}>
          <Badge
            sx={{ paddingLeft: 0 }}
            size="lg"
            radius="xl"
            color="teal"
            leftSection={<FaSteam size={25} />}>
            steam
          </Badge>
          <Badge
            sx={{ paddingLeft: 0 }}
            size="lg"
            radius="xl"
            color="teal"
            leftSection={<FaDownload size={20} />}>
            downloadable
          </Badge>
          <Badge
            sx={{ paddingLeft: 0 }}
            size="lg"
            radius="xl"
            color="teal"
            leftSection={<FaFireAlt size={20} />}>
            hot
          </Badge>
        </Group>
        <h1 className="text-center my-5">${game[0].price}</h1>
        <Container size="xs" className="flex space-x-3">
          <button className="bg-[#FF5400] rounded-lg p-4">
            <RiShoppingBag3Line size={35} color="white"/>
          </button>
          <button className="w-full p-4 bg-[#FF5400] text-white font-bold text-lg rounded-lg">
            Shop now
          </button>
        </Container>
        <div className="my-10">
          <Spoiler maxHeight={240} showLabel="Show More" hideLabel="Hide">
            <PortableText value={game[0].description} />
          </Spoiler>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ params }: any) {
  const query = `*[_type =='games' && slug.current == $slug]`;
  const game = await client.fetch(query, {
    slug: params?.slug,
  });
  return {
    props: {
      game,
    },
  };
}

export default GamePage;
