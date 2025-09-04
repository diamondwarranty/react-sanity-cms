export default {
    name: 'termsPage',
    title: 'Terms Page',
    type: 'document',
    fields: [
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: { source: 'title' || 'heroHeadline' },
        validation: (Rule) => Rule.required(),
      },
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
      {
        name: 'title',
        title: 'Page Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'hero',
        title: 'Hero Section',
        type: 'object',
        fields: [
          {
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
        ],
      },
      {
        name: 'agreementPoints',
        title: 'Agreement Points',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'agreementPoint',
            title: 'Agreement Point',
            fields: [
              {
                name: 'text',
                title: 'Point Text',
                type: 'text',
                validation: Rule => Rule.required(),
              },
            ],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  }