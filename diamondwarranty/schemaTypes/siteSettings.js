export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    __experimental_actions: ['update', 'publish'], // Singleton
    fields: [
      {
        name: 'navigation',
        title: 'Navigation Menu',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'text', title: 'Text', type: 'string', validation: (Rule) => Rule.required() },
              { name: 'link', title: 'Link', type: 'string', validation: (Rule) => Rule.required() },
            ],
          },
        ],
      },
      { name: 'footerText', title: 'Footer Text', type: 'text' },
      {
        name: 'globalSeo',
        title: 'Global SEO',
        type: 'object',
        fields: [
          { name: 'title', title: 'Default SEO Title', type: 'string' },
          { name: 'description', title: 'Default SEO Description', type: 'text' },
        ],
      },
    ],
    preview: { select: { title: 'Site Settings' } },
  };