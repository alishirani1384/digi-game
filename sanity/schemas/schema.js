
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import banners from './banners';
import games from './games';
import images from './images';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    banners,
    games,
    images
  ]),
})
