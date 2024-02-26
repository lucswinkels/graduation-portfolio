import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import learningOutcome from "./schemas/learningOutcome";
import post from "./schemas/post";
import project from "./schemas/project";
import researchMethod from "./schemas/researchMethod";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    project,
    category,
    learningOutcome,
    researchMethod,
    blockContent,
  ],
};
