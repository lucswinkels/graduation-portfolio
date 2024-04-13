"use client";

import {
  Braces,
  Clipboard,
  Code,
  Copy,
  Database,
  Terminal,
} from "lucide-react";
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
}: {
  language: string;
  value: string;
  filename: string;
}) {
  const { toast } = useToast();
  const iconSize = "size-4";
  //TODO: replace with actual logo's
  const languageIcons: { [key: string]: JSX.Element } = {
    bash: <Terminal className={iconSize} />,
    css: <Braces className={iconSize} />,
    js: <Code className={iconSize} />,
    json: <Braces className={iconSize} />,
    jsx: <Code className={iconSize} />,
    markup: <Code className={iconSize} />,
    php: <Code className={iconSize} />,
    python: <Code className={iconSize} />,
    sass: <Braces className={iconSize} />,
    scss: <Braces className={iconSize} />,
    sql: <Database className={iconSize} />,
    tsx: <Code className={iconSize} />,
    ts: <Code className={iconSize} />,
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
    toast({
      description: "Copied to clipboard!",
    });
  };
  return (
    <>
      <div className="bg-[color:hsl(240,10%,3.9%)] border-[color:hsl(240,3.7%,15.9%)] text-[color:hsl(240,5%,64.9%)] border rounded-tr-lg rounded-tl-lg px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {languageIcons[language]}
          <span className="text-sm">{filename}</span>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Copy
                className="size-4 cursor-pointer hover:text-[color:hsl(0,0%,98%)] transition-colors"
                onClick={handleCopyToClipboard}
              />
            </TooltipTrigger>
            <TooltipContent>Copy to clipboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <Refractor
        language={language}
        value={value}
        className="bg-[color:hsl(240,3.7%,5%)] border-[color:hsl(240,3.7%,15.9%)] text-[color:hsl(240,5%,64.9%)] border border-t-0 rounded-tl-none rounded-tr-none"
      />
    </>
  );
}
