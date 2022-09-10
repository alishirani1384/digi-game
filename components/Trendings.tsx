import React from 'react';
import { Divider, Grid } from '@mantine/core';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';

const Trendings = ({ games }: any) => {
  const { t } = useLanguage();
  return (
    <div className="mb-20">
      <div className='flex justify-between items-center'>
        <h1>{t.trendings}</h1>
        <button className='bg-gray-600 rounded-full p-2 hover:bg-gray-700 text-white'>View all</button>
      </div>
      <Grid columns={12} className="mx-auto my-5">
        {games.map((game: any, index: number) => {
          return (
            <Grid.Col
              key={index}
              sm={4}
              md={4}
              xs={4}
              className="hover:scale-105 transition-transform ease-out-in delay-100">
              <Link href={`/categories/${game.slug.current}`}>
                <div className="cursor-pointer relative">
                  <Image
                    src={urlFor(game.images[0].asset._ref).url()}
                    width="200px"
                    layout="responsive"
                    height="100px"
                    objectFit="cover"
                    className="rounded-lg"
                    alt={game.name}
                    objectPosition='center center'
                  />
                  <p className="absolute bottom-1 right-3 text-xl text-white">
                    ${game.price}
                  </p>
                  <div className="w-12 h-8 absolute bottom-0 left-0 bg-[#FF5400] rounded flex items-center justify-center font-bold text-white">-28%</div>
                </div>
              </Link>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
}

export default Trendings