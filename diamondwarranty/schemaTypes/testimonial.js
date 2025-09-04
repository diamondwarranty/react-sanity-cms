export default {
  name: 'testimonialsSection',
  title: 'Home: Testimonials Section',
  type: 'document',
  fields: [
    {
      name: 'sectionHeading',
      title: 'Section Heading',
      type: 'string',
      description: 'Heading for the testimonials section (e.g. "What People Say About Us")'
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'testimonialItem',
          fields: [
            {
              name: 'testimonialText',
              title: 'Testimonial Text',
              type: 'text',
              rows: 5,
              validation: Rule => Rule.required()
            },
            {
              name: 'authorName',
              title: 'Author Name',
              type: 'string',
              validation: Rule => Rule.required()
            }
          ],
          preview: {
            select: {
              title: 'authorName',
              subtitle: 'testimonialText'
            },
            prepare: ({ title, subtitle }) => ({
              title,
              subtitle: subtitle ? subtitle.slice(0, 80) + '...' : ''
            })
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'sectionHeading',
      subtitle: 'testimonials.0.authorName'
    },
    prepare: ({ title, subtitle }) => ({
      title: title || 'Testimonials Section',
      subtitle: subtitle ? `First testimonial by: ${subtitle}` : 'No testimonials added yet'
    })
  }
}
