export default {
    name: 'dealersPage',
    title: 'Dealers Page',
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
        initialValue: 'Dealers',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'heroDescription',
        title: 'Hero Description',
        type: 'text',
        initialValue:
          'To become a Diamond Warranty dealership, simply download and complete the forms below. Once filled out, you can upload them directly using the submission form.',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'forms',
        title: 'Download Forms',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'form',
            title: 'Form',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'subtitle',
                title: 'Subtitle',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'href',
                title: 'Download Link',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'imgSrc',
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
    ],
    preview: {
      select: {
        title: 'heroHeadline',
        subtitle: 'heroDescription',
      },
      prepare(selection) {
        const { title, subtitle } = selection;
        return {
          title: title || 'Dealers Page',
          subtitle: subtitle || 'No description provided',
        };
      },
    },
  };