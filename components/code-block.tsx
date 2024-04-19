"use client";

import { Braces, Copy, Database, Terminal } from "lucide-react";
import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoPhp,
  BiLogoPython,
  BiLogoSass,
  BiLogoTypescript,
} from "react-icons/bi";
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

import { useToast } from "@/components/ui/use-toast";

import { Card } from "./ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

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
  highlightedLines,
}: {
  language: string;
  value: string;
  filename: string;
  highlightedLines?: number[];
}) {
  const { toast } = useToast();
  const languageIcons: { [key: string]: JSX.Element } = {
    bash: <Terminal />,
    css: <BiLogoCss3 />,
    js: <BiLogoJavascript />,
    json: <Braces />,
    jsx: <BiLogoJavascript />,
    markup: <BiLogoHtml5 />,
    php: <BiLogoPhp />,
    python: <BiLogoPython />,
    sass: <BiLogoSass />,
    scss: <BiLogoSass />,
    sql: <Database />,
    tsx: <BiLogoTypescript />,
    ts: <BiLogoTypescript />,
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
    toast({
      description: "Copied to clipboard!",
    });
  };
  return (
    <Card>
      <div className="text-muted-foreground dark:text-muted-foreground bg-accent-subtle border-b p-4 flex justify-between items-center">
        <div className="flex items-center gap-2 [&>svg]:size-4">
          {languageIcons[language]}
          <span className="text-sm">{filename}</span>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Copy
                className="size-4 cursor-pointer hover:text-foreground transition-colors"
                onClick={handleCopyToClipboard}
              />
            </TooltipTrigger>
            <TooltipContent>Copy to clipboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Refractor language={language} value={value} markers={highlightedLines} />
    </Card>
  );
}
