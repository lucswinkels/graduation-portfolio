import * as React from "react";
import { Metadata } from "next";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import FadeUp from "@/components/animation/fade-up";
import BurdenOfProof from "@/components/burden-of-proof";
import Container from "@/components/container";
import { H1 } from "@/components/typography/h1";
import { Lead } from "@/components/typography/lead";

export const metadata: Metadata = {
  title: "Burden of proof",
};

export default function BurdenOfProofPage() {
  const Content = () => (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Burden of proof</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mb-8 xl:mb-16">
        <H1 className="mb-4">Burden of proof</H1>
        <Lead>A collection of everything I did during this internship.</Lead>
      </div>
    </>
  );

  return (
    <Container>
      <FadeUp>
        <Content />
        <BurdenOfProof />
      </FadeUp>
    </Container>
  );
}
