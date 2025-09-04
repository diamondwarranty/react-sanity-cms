export default {
    name: 'service',
    title: 'Service/Product',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
      { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (Rule) => Rule.required() },
      { name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required() },
      { name: 'price', title: 'Price', type: 'number' },
      { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
      {
        name: 'seoTitle',
        title: 'SEO Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'seoDescription',
        title: 'SEO Description',
        type: 'text',
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: { title: 'name', slug: 'slug.current' },
      prepare({ title, slug }) {
        return {
          title,
          media: undefined,
          url: `/services/${slug}?preview=true`,
        };
      },
    },
  };