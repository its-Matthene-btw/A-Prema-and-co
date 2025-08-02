import {defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: UsersIcon,
  // The __experimental_actions line has been removed to fix the error.
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the page (for internal use).',
      initialValue: 'About Us Page',
      readOnly: true,
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'The main heading in the hero section (e.g., "Our Story, Your Advantage").',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'The text below the main hero heading.',
    }),
    defineField({
        name: 'journeyTitle',
        title: 'Journey Section Title',
        type: 'string',
        initialValue: 'Our Journey',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'timeline',
        title: 'Journey Timeline',
        type: 'array',
        description: 'The list of events in the firm\'s history.',
        of: [{
            type: 'object',
            fields: [
                defineField({ name: 'year', title: 'Year or Label', type: 'string', description: 'e.g., "2018" or "Today"'}),
                defineField({ name: 'title', title: 'Event Title', type: 'string', description: 'e.g., "Firm Founded"'}),
                defineField({ name: 'description', title: 'Event Description', type: 'text' }),
            ],
            preview: {
                select: {
                    title: 'title',
                    subtitle: 'year'
                }
            }
        }]
    }),
    defineField({
        name: 'founderSectionTitle',
        title: 'Founder Section Title',
        type: 'string',
        initialValue: 'Meet The Founder',
    }),
    defineField({
      name: 'founder',
      title: 'Founder Profile',
      type: 'reference',
      description: 'Select the profile of the founder from the list of advocates.',
      to: [{type: 'advocate'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'partnerSectionTitle',
        title: 'Partner Section Title',
        type: 'string',
        initialValue: 'Meet Our Partner',
    }),
    defineField({
      name: 'partner',
      title: 'Partner Profile',
      type: 'reference',
      description: 'Select the profile of the partner from the list of advocates.',
      to: [{type: 'advocate'}],
    }),
    defineField({
        name: 'talentSectionTitle',
        title: 'Talent Section Title',
        type: 'string',
        initialValue: 'Nurturing Future Talent',
    }),
    defineField({
      name: 'talent',
      title: 'Talent Profile',
      type: 'reference',
      description: 'Select the profile of the chambering student or other talent.',
      to: [{type: 'advocate'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare() {
      return {
        title: 'About Us Page Content'
      }
    }
  }
})