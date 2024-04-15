import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import FadeUp from "@/components/animation/fade-up";
import BurdenOfProof from "@/components/burden-of-proof";
import Container from "@/components/container";
import { A } from "@/components/typography/a";
import { Blockquote } from "@/components/typography/blockquote";
import { H1 } from "@/components/typography/h1";
import { H2 } from "@/components/typography/h2";
import { H3 } from "@/components/typography/h3";
import { Lead } from "@/components/typography/lead";
import { List } from "@/components/typography/list";
import { P } from "@/components/typography/p";
import { Prose } from "@/components/typography/prose";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  const Content = () => (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-8 xl:mb-16">
        <H1 className="mb-4">Contact</H1>
        <Lead>Coming soon.</Lead>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </>
  );

  return (
    <Container>
      <FadeUp>
        <Content />
      </FadeUp>
    </Container>
  );
}
