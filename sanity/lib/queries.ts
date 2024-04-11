import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug, description, mainImage,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
} | order(categories[0] asc)`;

// Get all posts where search query matches title, categories, or project
export const postsMatchingSearchQuery = groq`*[_type == "post" && defined(slug.current) && (project->slug.current match $query || title match $query || categories[]->title match $query)]{
  _id, title, slug, description, mainImage,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
} | order(categories[0] asc)`;

// Get specific project's posts
export const projectPostsQuery = groq`*[_type == "post" && defined(slug.current) && project->slug.current == $projectSlug]{
  _id, title, slug, description, mainImage,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
} | order(categories[0] asc)`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  _id, title, mainImage, body, description, publishedAt, slug,
  "categories": categories[]->title, 
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},   
  "researchMethods": researchMethods[]->{title, slug, "category": researchMethodCategory->title},
}`;

// Get previous (based on publishedAt) post
export const previousPostQuery = groq`*[_type == "post" && defined(slug.current) && publishedAt < $currentPostPublishedAt] | order(publishedAt desc) [0]{
  _id, title, mainImage, body, description, publishedAt, slug,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
}`;

// Get next (based on publishedAt) post
export const nextPostQuery = groq`*[_type == "post" && defined(slug.current) && publishedAt > $currentPostPublishedAt] | order(publishedAt asc) [0]{
  _id, title, mainImage, body, description, publishedAt, slug,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
}`;

// Get first (based on publishedAt) post
export const firstPostQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt asc) [0]{
  _id, title, mainImage, body, description, publishedAt, slug,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
}`;

// Get last (based on publishedAt) post
export const lastPostQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc) [0]{
  _id, title, mainImage, body, description, publishedAt, slug,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
}`;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

// Get all project slugs
export const projectPathsQuery = groq`*[_type == "project" && defined(slug.current)][]{
  "params": { "slug": slug.current }
}`;

// Get all projects
export const projectsQuery = groq`*[_type == "project" && defined(slug.current)]{
    _id, title, slug, description, mainImage, year
}`;

// Get a single project by its slug
export const projectQuery = groq`*[_type == "project" && slug.current == $slug][0]{ 
  title, mainImage, body, description, slug, year
}`;
