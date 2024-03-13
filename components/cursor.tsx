"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isOverLink, setIsOverLink] = useState(false);

  useEffect(() => {
    const handleMouseOver = () => setIsOverLink(true);
    const handleMouseOut = () => setIsOverLink(false);

    const anchors = document.querySelectorAll("a");
    anchors.forEach((anchor) => {
      anchor.addEventListener("mouseover", handleMouseOver);
      anchor.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("mouseover", handleMouseOver);
        anchor.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      const handlePointerMove = ({
        clientX,
        clientY,
      }: {
        clientX: number;
        clientY: number;
      }) => {
        const element = ref.current as unknown as HTMLElement;

        const x = clientX - element.offsetLeft - element.offsetWidth / 2;
        const y = clientY - element.offsetTop - element.offsetHeight / 2;
        setCoordinates({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`rounded-full bg-foreground opacity-5 pointer-events-none select-none fixed z-0 border size-16`}
      animate={{
        x: coordinates.x,
        y: coordinates.y,
        scale: isOverLink ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
      }}
    />
  );
}
