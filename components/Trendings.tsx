import React from 'react';
import { Container, Grid } from '@mantine/core';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';
import { useViewportSize } from '@mantine/hooks';
import { useKeenSlider } from "keen-slider/react";
import { GamesProps } from '../types';
interface Itrending{
  games: GamesProps[]
}

const Trendings = ({ games }: Itrending) => {
  const { t } = useLanguage();
  const { width } = useViewportSize();
  
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: 'auto',
      perView: 2,
      spacing: 15,
      
    },
  });
  
  
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center">
        <h1>{t.trendings}</h1>
        <button className="bg-gray-600 font-['Vazir'] rounded-full p-2 hover:bg-gray-700 text-white">
          {t.viewAll}
        </button>
      </div>
      {width<600?<div ref={sliderRef} className="keen-slider mt-4">
        {games.map((game: GamesProps, index: number) => {
          return (
            <div key={index} className="keen-slider__slide rounded-lg">
              <Link href={`/categories/${game.slug.current}`}>
                <div className="cursor-pointer relative hover:scale-105 transition-transform ease-out-in delay-100">
                  <Image
                    src={urlFor(game.images[0].asset._ref).url()}
                    width="360px"
                    layout="responsive"
                    height="207px"
                    objectFit="cover"
                    className="rounded-lg"
                    alt={game.title}
                    objectPosition="center center"
                  />
                  <p className="absolute bottom-1 right-3 text-xl text-white">
                    ${game.price}
                  </p>
                  <div className="w-12 h-8 absolute bottom-0 left-0 bg-[#FF5400] rounded flex items-center justify-center font-bold text-white">
                    -28%
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
        :
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
                    width="280px"
                    layout="responsive"
                    height="160px"
                    objectFit="cover"
                    className="rounded-lg"
                    alt={game.name}
                    objectPosition="center center"
                  />
                  <p className="absolute bottom-1 right-3 text-xl text-white">
                    ${game.price}
                  </p>
                  <div className="w-12 h-8 absolute bottom-0 left-0 bg-[#FF5400] rounded flex items-center justify-center font-bold text-white">
                    -28%
                  </div>
                </div>
              </Link>
            </Grid.Col>
          );
        })}
      </Grid>}
    </div>
  );
}

export default Trendings