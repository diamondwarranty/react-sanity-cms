export default {
    name: 'coveragesPage',
    title: 'Coverages Page',
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
        name: 'heroHeadline',
        title: 'Hero Headline',
        type: 'string',
        initialValue: 'Coverages',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'heroDescription',
        title: 'Hero Description',
        type: 'text',
        initialValue:
          'Protection that’s as unique as your vehicle. Discover plans that keep you covered, no matter where the road leads.',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'plans',
        title: 'Plans',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'plan',
            title: 'Plan',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'sections',
                title: 'Sections',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    name: 'section',
                    title: 'Section',
                    fields: [
                      {
                        name: 'title',
                        title: 'Title',
                        type: 'string',
                      },
                      {
                        name: 'items',
                        title: 'Items',
                        type: 'array',
                        of: [{ type: 'string' }],
                        validation: (Rule) => Rule.required(),
                      },
                    ],
                  },
                ],
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'terms',
                title: 'Terms',
                type: 'array',
                of: [{ type: 'string' }],
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'footnotes',
                title: 'Footnotes',
                type: 'array',
                of: [
                  {
                    type: 'object',
                    name: 'footnote',
                    title: 'Footnote',
                    fields: [
                      {
                        name: 'text',
                        title: 'Text',
                        type: 'string',
                        validation: (Rule) => Rule.required(),
                      },
                      {
                        name: 'bold',
                        title: 'Bold',
                        type: 'boolean',
                        initialValue: false,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'heroHeadline',
        subtitle: 'heroDescription',
      },
      prepare({ title, subtitle }) {
        return {
          title: title || 'No headline set',
          subtitle: subtitle
            ? subtitle.length > 100
              ? `${subtitle.substring(0, 100)}...`
              : subtitle
            : 'No description set',
        };
      },
    },
  };