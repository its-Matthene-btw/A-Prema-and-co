import {defineType, defineField} from 'sanity'
import {OlistIcon} from '@sanity/icons'

export const socialPost = defineType({
  name: 'socialPost',
  title: 'Social Post Embed',
  type: 'object',
  icon: OlistIcon,
  fields: [
    defineField({
      name: 'url',
      title: 'Social Media URL',
      type: 'url',
      description: 'Paste the full URL of the Facebook, Instagram, or other social media post.',
      validation: (Rule) => Rule.required(),
    }),
  ],
})