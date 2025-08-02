import {defineType, defineField} from 'sanity'
import {BookIcon} from '@sanity/icons'

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  icon: BookIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main title of the article.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The unique URL part of the article. Click "Generate" to create from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    
    // Updated Featured Media section
    defineField({
      name: 'featuredMedia',
      title: 'Featured Media',
      type: 'object',
      fields: [
        defineField({
          name: 'mediaType',
          title: 'Select Media Type',
          type: 'string',
          options: {
            list: ['Image', 'Video Embed'],
            layout: 'radio',
          },
          initialValue: 'Image',
        }),
        defineField({
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
          fields: [ { name: 'alt', type: 'string', title: 'Alternative text' } ],
          hidden: ({ parent }) => parent?.mediaType !== 'Image', // Only show if "Image" is selected
        }),
        defineField({
          name: 'videoUrl',
          title: 'Video URL',
          type: 'url',
          description: 'Paste the URL of a YouTube or Vimeo video.',
          hidden: ({ parent }) => parent?.mediaType !== 'Video Embed', // Only show if "Video Embed" is selected
        }),
      ]
    }),

    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A short summary of the article used on listing pages.',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      description: 'The author of the article. This links to a profile from your team.',
      to: [{type: 'advocate'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      description: 'Organize this article into one or more categories.',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'The date the article was published. You can set this to a future date to schedule an article.',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        { type: 'image', fields: [{ name: 'alt', type: 'string', title: 'Alternative Text' }] },
        { type: 'code', options: { language: 'javascript' /*... etc*/ } },
        { type: 'socialPost' },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'featuredMedia.image',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})