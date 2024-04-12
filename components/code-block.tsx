"use client";

import { Braces, Code, Database, Terminal } from "lucide-react";
import Refractor from "react-refractor";
import bash from "refractor/lang/bash";
import css from "refractor/lang/css";
import js from "refractor/lang/javascript";
import json from "refractor/lang/json";
import jsx from "refractor/lang/jsx";
import markup from "refractor/lang/markup";
import php from "refractor/lang/php";
import python from "refractor/lang/python";
import sass from "refractor/lang/sass";
import scss from "refractor/lang/scss";
import sql from "refractor/lang/sql";
import tsx from "refractor/lang/tsx";
import ts from "refractor/lang/typescript";

const languages = [
  bash,
  css,
  js,
  json,
  jsx,
  markup,
  php,
  python,
  sass,
  scss,
  sql,
  tsx,
  ts,
];

for (const language of languages) {
  Refractor.registerLanguage(language);
}

export function CodeBlock({
  language,
  value,
  filename,
}: {
  language: string;
  value: string;
  filename?: string;
}) {
  const languageIcons: { [key: string]: JSX.Element } = {
    bash: <Terminal />,
    css: <Braces />,
    js: <Code />,
    json: <Braces />,
    jsx: <Code />,
    markup: <Code />,
    php: <Code />,
    python: <Code />,
    sass: <Braces />,
    scss: <Braces />,
    sql: <Database />,
    tsx: <Code />,
    ts: <Code />,
  };

  return (
    <>
      {filename && (
        <div className="bg-background border-b rounded-tr-lg rounded-tl-lg">
          {languageIcons[language]}
          <span>{filename}</span>
        </div>
      )}
      <Refractor
        language={language}
        value={value}
        className="border bg-background rounded-tl-none rounded-tr-none"
      />
    </>
  );
}
