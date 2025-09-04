export default {
    name: 'benefitsSection',
    title: 'Home: Benefits Section',
    type: 'document',
    fields: [
      {
        name: 'sectionHeading',
        title: 'Section Heading',
        type: 'string',
        description: 'Heading for the benefits section (e.g. "Why Choose Diamond Warranty")'
      },
      {
        name: 'benefits',
        title: 'Benefits',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'benefitItem',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
                options: {
                  hotspot: true
                },
                description: 'Upload an image representing the benefit'
              },
              {
                name: 'alt',
                title: 'Alt Text',
                type: 'string',
                description: 'Alternative text for accessibility and SEO',
                validation: Rule => Rule.required()
              },
              {
                name: 'title',
                title: 'Title',
                type: 'string',
                validation: Rule => Rule.required()
              },
              {
                name: 'description',
                title: 'Description',
                type: 'text',
                rows: 5,
                validation: Rule => Rule.required()
              }
            ],
            preview: {
              select: {
                title: 'title',
                subtitle: 'description',
                media: 'image'
              },
              prepare: ({ title, subtitle, media }) => ({
                title,
                subtitle: subtitle ? subtitle.slice(0, 80) + '...' : '',
                media
              })
            }
          }
        ]
      }
    ],
    preview: {
      select: {
        title: 'sectionHeading',
        subtitle: 'benefits.0.title'
      },
      prepare: ({ title, subtitle }) => ({
        title: title || 'Benefits Section',
        subtitle: subtitle ? `First benefit: ${subtitle}` : 'No benefits added yet'
      })
    }
  }
  