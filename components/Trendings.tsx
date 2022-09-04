import React from 'react';
import { Grid } from '@mantine/core';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';

const Trendings = ({games}:any) => {
  return (
    <div>
      <h1>Trendings</h1>
          <Grid columns={12} className='mx-auto'>
              {
                  games.map((game:any, index:number) => {
                      return (
                        <Grid.Col key={index} sm={4} md={4} xs={4}>
                          <Image src={urlFor(game.images[0].asset._ref).url()} width="300px" height="250px" objectFit='cover' className='rounded-lg'/>
                        </Grid.Col>
                      );
                  })
              }
      </Grid>
    </div>
  );
}

export default Trendings