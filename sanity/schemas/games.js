export default {
  name: "games",
  type: "document",
  title: "Games",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "video",
      title: "video",
      type: "file",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "banner",
      title: "Banner",
      type: "image",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: 'Price',
      name: 'price',
      type:'number'
    }
  ],
};
