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
    <div className="border border-[color:hsl(240,3.7%,15.9%)] bg-[color:hsl(240,3.7%,5%)] rounded-lg p-1 pt-0">
      <div className="bg-[color:hsl(240,10%,3.9%)] border-[color:hsl(240,3.7%,15.9%)] text-[color:hsl(240,5%,64.9%)] border-b px-3 py-4 flex justify-between items-center w-[calc(100%+0.5rem)] rounded-t-lg relative right-1">
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
        className="bg-[color:hsl(240,3.7%,5%)] text-[color:hsl(240,5%,64.9%)] font-mono"
      />
    </div>
  );
}
