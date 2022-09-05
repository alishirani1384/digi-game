import { BackgroundImage, Center, Spoiler } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { urlFor } from "../../lib/sanity";
import { client } from "../../utils/client";
import { PortableText } from "@portabletext/react";
import {FaRegHeart} from 'react-icons/fa'

const GamePage = ({ game }: any) => {

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
        <h1 className="text-center my-5">${game[0].price}</h1>
        <div className="my-10">
          <Spoiler maxHeight={200} showLabel="Show More" hideLabel="Hide">
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
