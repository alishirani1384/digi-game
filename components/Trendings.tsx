import React from 'react';
import { Grid } from '@mantine/core';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link';

const Trendings = ({games}:any) => {
  return (
    <div className='mb-20'> 
      <h1>Trendings</h1>
          <Grid columns={12} className='mx-auto'>
              {
                  games.map((game:any, index:number) => {
                      return (
                        <Grid.Col key={index} sm={4} md={4} xs={4} >
                          <Link href={`/categories/${game.slug.current}`}>
                            <div className='cursor-pointer'>
                              <Image src={urlFor(game.images[0].asset._ref).url()} width="300px" height="250px" objectFit='cover' className='rounded-lg' alt={game.name} />
                            </div>
                          </Link>   
                        </Grid.Col>
                      );
                  })
              }
      </Grid>
    </div>
  );
}

export default Trendings