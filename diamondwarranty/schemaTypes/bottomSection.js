export default {
    name: 'bottomSection',
    title: 'Bottom Section',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        description: 'The main heading for the bottom section.',
        validation: Rule => Rule.required(),
      },
      {
        name: 'description',
        title: 'Section Description',
        type: 'text',
        description: 'The paragraph text describing the coverage options.',
        validation: Rule => Rule.required(),
      },
      {
        name: 'buttons',
        title: 'Buttons',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'button',
            title: 'Button',
            fields: [
              {
                name: 'text',
                title: 'Button Text',
                type: 'string',
                description: 'The text displayed on the button.',
                validation: Rule => Rule.required(),
              },
              {
                name: 'link',
                title: 'Button Link',
                type: 'string',
                description: 'The URL or path the button links to.',
                validation: Rule => Rule.required(),
              },
              {
                name: 'style',
                title: 'Button Style',
                type: 'string',
                description: 'The style of the button (e.g., BlueBtn or WhiteBtn).',
                options: {
                  list: [
                    { title: 'Blue Button', value: 'blue' },
                    { title: 'White Button', value: 'white' },
                  ],
                },
                validation: Rule => Rule.required(),
              },
            ],
            preview: {
              select: {
                title: 'text',
                subtitle: 'link',
              },
            },
          },
        ],
        validation: Rule => Rule.min(1).max(2), // Matches the two buttons in the component
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description',
      },
      prepare({ title, subtitle }) {
        return {
          title: title || 'Bottom Section',
          subtitle: subtitle ? subtitle.substring(0, 50) + '...' : 'No description',
        };
      },
    },
  };