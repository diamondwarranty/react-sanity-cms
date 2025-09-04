export default {
    name: 'aboutPage',
    title: 'About Page',
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
        initialValue: 'About',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'heroDescription',
        title: 'Hero Description',
        type: 'text',
        initialValue:
          'With close to 20 years of industry knowledge and experience, Diamond Warranty leads the way in providing trusted, comprehensive extended warranty plans.',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'logos',
        title: 'Logos',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'logo',
            title: 'Logo',
            fields: [
              {
                name: 'src',
                title: 'Source',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'width',
                title: 'Width',
                type: 'number',
                validation: (Rule) => Rule.required().min(1),
              },
              {
                name: 'height',
                title: 'Height',
                type: 'number',
                validation: (Rule) => Rule.required().min(1),
              },
            ],
          },
        ],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'carrierText',
        title: 'Carrier Text',
        type: 'string',
        initialValue: 'A RATED CARRIER',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'aboutSections',
        title: 'About Sections',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'aboutSection',
            title: 'About Section',
            fields: [
              {
                name: 'id',
                title: 'ID',
                type: 'number',
                validation: (Rule) => Rule.required().integer().min(1),
              },
              {
                name: 'image',
                title: 'Image Source',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
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
      prepare(selection) {
        const { title, subtitle } = selection;
        return {
          title: title || 'About Page',
          subtitle: subtitle || 'No description provided',
        };
      },
    },
  };