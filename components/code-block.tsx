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

import { Card, CardHeader } from "./ui/card";
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
  const iconSize = "size-4";
  const languageIcons: { [key: string]: JSX.Element } = {
    bash: <Terminal className={iconSize} />,
    css: <BiLogoCss3 className={iconSize} />,
    js: <BiLogoJavascript className={iconSize} />,
    json: <Braces className={iconSize} />,
    jsx: <BiLogoJavascript className={iconSize} />,
    markup: <BiLogoHtml5 className={iconSize} />,
    php: <BiLogoPhp className={iconSize} />,
    python: <BiLogoPython className={iconSize} />,
    sass: <BiLogoSass className={iconSize} />,
    scss: <BiLogoSass className={iconSize} />,
    sql: <Database className={iconSize} />,
    tsx: <BiLogoTypescript className={iconSize} />,
    ts: <BiLogoTypescript className={iconSize} />,
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(value);
    toast({
      description: "Copied to clipboard!",
    });
  };
  return (
    <Card>
      <div className="text-muted-foreground dark:text-muted-foreground border-b p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
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
