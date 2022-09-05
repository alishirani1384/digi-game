import { BackgroundImage, Center } from '@mantine/core';
import Image from 'next/image'
import React from 'react'
import { urlFor } from '../../lib/sanity';
import { client } from '../../utils/client'

const GamePage = ({ game }:any) => {
  console.log(game);
  
  return (
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
  );
}

export async function getStaticPaths() {
  const query = `*[_type == "games"]{
    slug{
      current
    }
  }`;

  const games = await client.fetch(query);
  const paths = games.map((game:any) => ({
    params: {
      slug:game.slug.current
    }
  }))
  return {
    paths,
    fallback:'blocking'
  };
}

export async function getStaticProps({params}:any) {
  const query = `*[_type =='games' && slug.current == $slug]`;
  const game = await client.fetch(query, {
    slug:params?.slug
  })
  return {
    props: {
      game
    }
  }
}

export default GamePage