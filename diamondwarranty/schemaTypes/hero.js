export default {
    name: 'hero',
    title: 'Home/Top: Hero Section',
    type: 'document',
    __experimental_actions: ['update', 'delete', 'publish'],
    fields: [
      {
        name: 'rating',
        title: 'Rating Text',
        type: 'string',
        description: 'e.g., "Rated 3.3 / 5 by 117 customers"',
      },
      {
        name: 'headline',
        title: 'Main Headline',
        type: 'string',
        description: 'Main hero headline',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'Hero description text',
        validation: Rule => Rule.required(),
      },
      {
        name: 'primaryButton',
        title: 'Primary Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
          },
          {
            name: 'link',
            title: 'Link',
            type: 'string',
          },
        ],
      },
      {
        name: 'secondaryButton',
        title: 'Secondary Button',
        type: 'object',
        fields: [
          {
            name: 'text',
            title: 'Button Text',
            type: 'string',
          },
          {
            name: 'link',
            title: 'Link',
            type: 'string',
          },
        ],
      },
      {
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: 'alt',
            title: 'Alt Text',
            type: 'string',
            description: 'Important for accessibility and SEO',
          },
        ],
      },
      {
        name: 'sectionContent',
        title: 'Section Content',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Section Heading',
            type: 'string',
            description: 'Heading for the new ownership section',
          },
          {
            name: 'description',
            title: 'Section Description',
            type: 'text',
            description: 'Description for the new ownership section',
          },
          {
            name: 'button',
            title: 'Section Button',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Button Text',
                type: 'string',
              },
              {
                name: 'link',
                title: 'Button Link',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'headline',
        media: 'heroImage',
        sectionHeading: 'sectionContent.heading',
      },
      prepare(selection) {
        const { title, media, sectionHeading } = selection;
        return {
          title: title,
          subtitle: sectionHeading ? `Section: ${sectionHeading}` : '',
          media: media,
        };
      },
    },
  }
