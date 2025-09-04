export default {
    name: 'footerSection',
    title: 'Footer Section',
    type: 'document',
    fields: [
      {
        name: 'logoText',
        title: 'Logo Text',
        type: 'string',
        description: 'The text displayed next to the logo (e.g., Diamond Warranty).',
        validation: Rule => Rule.required(),
      },
      {
        name: 'logoLink',
        title: 'Logo Link',
        type: 'string',
        description: 'The URL or path the logo links to (e.g., /).',
        validation: Rule => Rule.required(),
      },
      {
        name: 'rightText',
        title: 'Right Text',
        type: 'string',
        description: 'The text displayed on the right side of the top bar (e.g., PCI DSS Validated).',
        validation: Rule => Rule.required(),
      },
      {
        name: 'disclaimer',
        title: 'Disclaimer',
        type: 'text',
        description: 'The disclaimer text displayed in the footer.',
        validation: Rule => Rule.required(),
      },
      {
        name: 'copyright',
        title: 'Copyright Text',
        type: 'string',
        description: 'The copyright text (e.g., © Diamond Warranty Corp.).',
        validation: Rule => Rule.required(),
      },
      {
        name: 'links',
        title: 'Bottom Links',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'link',
            title: 'Link',
            fields: [
              {
                name: 'text',
                title: 'Link Text',
                type: 'string',
                description: 'The text displayed for the link (e.g., Terms and Conditions).',
                validation: Rule => Rule.required(),
              },
              {
                name: 'url',
                title: 'Link URL',
                type: 'string',
                description: 'The URL or path the link points to (e.g., /terms).',
                validation: Rule => Rule.required(),
              },
            ],
            preview: {
              select: {
                title: 'text',
                subtitle: 'url',
              },
            },
          },
        ],
        validation: Rule => Rule.min(1).max(5), // Allows flexibility for additional links but limits to a reasonable number
      },
    ],
    preview: {
      select: {
        title: 'logoText',
        subtitle: 'rightText',
      },
      prepare({ title, subtitle }) {
        return {
          title: title || 'Footer Section',
          subtitle: subtitle ? subtitle : 'No right text',
        };
      },
    },
  };