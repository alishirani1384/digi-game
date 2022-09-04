import createImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {client} from '../utils/client'

export const urlFor = (source:SanityImageSource) => createImageUrlBuilder(client).image(source);