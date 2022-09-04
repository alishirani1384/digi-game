import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: "hedr5115",
  dataset: "production",
  apiVersion: "2022-04-09",
  useCdn: false,
});