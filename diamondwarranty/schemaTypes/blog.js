export default {
    name: 'blog',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'publishedAt',
        title: 'Published At',
        type: 'datetime',
        validation: (Rule) => Rule.required(),
      },
      { name: 'author', title: 'Author', type: 'string' },
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
      select: { title: 'title', subtitle: 'publishedAt', slug: 'slug.current' },
      prepare({ title, subtitle, slug }) {
        return {
          title,
          subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : '',
          media: undefined,
          url: `/blog/${slug}?preview=true`,
        };
      },
    },
  };