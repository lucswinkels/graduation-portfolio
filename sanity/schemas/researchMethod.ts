import { defineField, defineType } from "sanity";

export default defineType({
  name: "researchMethod",
  title: "Research Method",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "researchMethodCategory",
      title: "Research Method Category",
      type: "string",
    }),
  ],
});
