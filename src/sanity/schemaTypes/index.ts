// Import your existing schemas
import { category } from './category'
import advocate from './advocate'
import aboutPage from './aboutPage'

// 1. Import the new socialPost schema

// 2. Add socialPost to the array of types
export const schemaTypes = [

  advocate,
  aboutPage,
  category // <-- Add this line
]