import { defineArrayMember, defineType } from "sanity";

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
            ],
          },
        ],
      },
    }),
    defineArrayMember({
      type: "object",
      name: "button",
      title: "Button",
      fields: [
        {
          title: "Text",
          name: "text",
          type: "string",
        },
        {
          title: "URL",
          name: "href",
          type: "url",
        },
      ],
    }),
    defineArrayMember({
      type: "image",
      name: "image",
      title: "Image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) =>
            Rule.error("You have to fill out the alternative text.").required(),
        },
      ],
    }),
    defineArrayMember({
      type: "file",
      name: "video",
      title: "Video",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          validation: (Rule) =>
            Rule.error("You have to fill out the alternative text.").required(),
        },
      ],
    }),
    defineArrayMember({
      type: "code",
      name: "code",
      title: "Code block",
      options: {
        language: "typescript",
        languageAlternatives: [
          { title: "TSX", value: "tsx" },
          { title: "JSX", value: "jsx" },
          { title: "Typescript", value: "typescript" },
          { title: "Javascript", value: "javascript" },
          { title: "Python", value: "python" },
          { title: "PHP", value: "php" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "SCSS", value: "scss" },
          { title: "Sass", value: "sass" },
          { title: "Bash", value: "bash" },
          { title: "JSON", value: "json" },
          { title: "SQL", value: "sql" },
        ],
        withFilename: true,
      },
    }),
  ],
});
