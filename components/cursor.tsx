"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

export default function Cursor() {
  const ref = useRef(null);
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [isOverLink, setIsOverLink] = useState(false);

  useEffect(() => {
    const handleMouseOver = () => setIsOverLink(true);
    const handleMouseOut = () => setIsOverLink(false);

    const anchors = document.querySelectorAll("a.post-preview");
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
      className="rounded-full bg-background pointer-events-none select-none fixed z-50 border size-12 flex items-center justify-center"
      animate={{
        x: coordinates.x,
        y: coordinates.y,
        opacity: isOverLink ? 1 : 0,
        scale: isOverLink ? 1.5 : 1,
      }}
      transition={{
        type: "linear",
      }}
    >
      <MoveRight className="size-4 select-none cursor-pointer pointer-events-none" />
    </motion.div>
  );
}
