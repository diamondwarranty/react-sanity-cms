export default {
    name: 'faqPage',
    title: 'FAQ Page',
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
        initialValue: 'FAQ',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'heroDescription',
        title: 'Hero Description',
        type: 'text',
        initialValue:
          'Browse through the topics below to find the information you need. If you still have questions, don’t hesitate to contact us directly for personalized assistance.',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'faqs',
        title: 'FAQs',
        type: 'array',
        of: [
          {
            type: 'object',
            name: 'faq',
            title: 'FAQ',
            fields: [
              {
                name: 'question',
                title: 'Question',
                type: 'string',
                validation: (Rule) => Rule.required(),
              },
              {
                name: 'answer',
                title: 'Answer',
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
          title: title || 'FAQ Page',
          subtitle: subtitle || 'No description provided',
        };
      },
    },
  };