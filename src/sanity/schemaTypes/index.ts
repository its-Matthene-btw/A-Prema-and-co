// Import your existing schemas
import { article } from './article'
import { category } from './category'
import advocate from './advocate'
import aboutPage from './aboutPage'

// 1. Import the new socialPost schema
import { socialPost } from './socialPost'

// 2. Add socialPost to the array of types
export const schemaTypes = [
  article,
  advocate,
  aboutPage,
  category,
  socialPost // <-- Add this line
]