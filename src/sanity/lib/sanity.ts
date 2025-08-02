import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production'
})

const builder = imageUrlBuilder(client)

export function urlFor(source: { asset?: { _ref?: string } }) {
  if (!source?.asset?._ref) {
    console.warn('Invalid image source:', source);
    return {
      url: () => '/default-profile.jpg',
      width: () => 800,
      height: () => 1000,
    };
  }
  return builder.image(source)
}

export async function getFeaturedAdvocates() {
  try {
    return await client.fetch(`
      *[_type == "advocate" && isFeatured == true] | order(displayOrder asc) {
        _id,
        name,
        position,
        "slug": slug.current,
        bio,
        image {
          ...,
          asset-> {
            _id,
            _ref,
            url,
            metadata {
              dimensions,
              lqip
            }
          }
        }
      }
    `)
  } catch (error) {
    console.error('Error fetching advocates:', error)
    return []
  }
}

// Update the getAboutPage function. It no longer needs to fetch hero data.

export async function getAboutPage() {
  const query = `*[_type == "aboutPage"][0]{
    founderSectionTitle,
    "founder": founder->{
      name,
      position,
      qualifications,
      image,
      bio
    },
    partnerSectionTitle,
    "partner": partner->{
      name,
      position,
      qualifications,
      image,
      bio
    },
    talentSectionTitle,
    "talent": talent->{
      name,
      position,
      qualifications,
      image,
      bio
    }
  }`;
  
  const data = await client.fetch(query);
  return data;
}

// Add these two functions to your existing Sanity library file



export async function getAllCategories() {
  const query = `*[_type == "category"]{
    _id,
    title
  }`;
  
  const data = await client.fetch(query);
  return data;
}

// Add this function to your existing Sanity library file

