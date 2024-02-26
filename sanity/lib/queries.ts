import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  _id, title, slug, description, mainImage,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
}`;

// Get specific project's posts
export const projectPostsQuery = groq`*[_type == "post" && defined(slug.current) && project->slug.current == $projectSlug]{
  _id, title, slug, description, mainImage,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
}`;

// Get a single post by its slug
export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]{ 
  title, mainImage, body, description, 
  "categories": categories[]->title, 
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},   
  "researchMethods": researchMethods[]->{title, slug, "category": researchMethodCategory->title},
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

// Get previous/next (related) posts
export const previousPostQuery = groq`*[_type == "post" && defined(slug.current) && project->slug.current == $currentPost]{
  _id, title, slug, description, mainImage,
  "categories": categories[]->title,
  "project": project->title,
  "learningOutcomes": learningOutcomes[]->{title, slug},
}`;
