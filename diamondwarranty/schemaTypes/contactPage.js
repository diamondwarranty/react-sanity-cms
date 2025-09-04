export default {
  name: 'contactPage',
  title: 'Contact Page',
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
          name: 'description',
          title: 'Description',
          type: 'text',
          validation: Rule => Rule.required(),
        },
      ],
    },
    {
      name: 'contactCards',
      title: 'Contact Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contactCard',
          title: 'Contact Card',
          fields: [
            {
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'content',
              title: 'Card Content',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'contentItem',
                  title: 'Content Item',
                  fields: [
                    {
                      name: 'label',
                      title: 'Label',
                      type: 'string',
                      validation: Rule => Rule.required(),
                    },
                    {
                      name: 'value',
                      title: 'Value',
                      type: 'text',
                    },
                    {
                      name: 'link',
                      title: 'Link (optional)',
                      type: 'url',
                    },
                  ],
                },
              ],
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