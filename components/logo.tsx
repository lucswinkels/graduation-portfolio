"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  onClick,
  className,
}: {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  className?: string;
}) {
  return (
    // <Link href="/" className={cn("size-8", className)} onClick={onClick}>
    //   <svg
    //     id="logo"
    //     data-name="logo"
    //     xmlns="http://www.w3.org/2000/svg"
    //     viewBox="0 0 20.92 19.44"
    //   >
    //     <g>
    //       <g>
    //         <polygon
    //           className="fill-current"
    //           points="2.93 1.26 0 0 0 6.79 2.93 8.1 2.93 1.26"
    //         />
    //         <path
    //           className="fill-current"
    //           d="M16.4,16.1c-.62,.52-1.49,.46-1.45,.46H2.93v-6.46l-2.93-1.31v10.65H15.93s2.02-.43,3.19-2.13l-2.72-1.21Z"
    //         />
    //         <path
    //           className="fill-current"
    //           d="M20.92,12.59c0-4.02-2.87-5.67-7.81-5.67-.88,0-1.85-.53-1.85-1.85s1.25-2.21,1.25-2.21h4.92l1.75-2.87h-6.67s-4.11,.47-4.11,5.12,4.21,5.02,4.21,5.02h3.34s2.06,.29,2.06,2.44c0,.76-.27,1.22-.62,1.51l2.72,1.21c.47-.68,.8-1.57,.8-2.72Z"
    //         />
    //       </g>
    //     </g>
    //   </svg>
    // </Link>
    <Link className="flex items-center space-x-2" href="/" onClick={onClick}>
      {/* <svg
        width="1100"
        height="1100"
        viewBox="0 0 1100 1100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
      >
        <rect x="850" width="250" height="250" rx="60" fill="currentColor" />
        <rect width="500" height="500" rx="60" fill="currentColor" />
        <rect y="600" width="500" height="500" rx="60" fill="currentColor" />
        <rect
          x="600"
          y="600"
          width="500"
          height="500"
          rx="60"
          fill="currentColor"
        />
      </svg> */}
      <svg
        width="1100"
        height="1100"
        viewBox="0 0 1100 1100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-4 h-4"
      >
        <rect
          x="600"
          y="250"
          width="250"
          height="250"
          rx="60"
          fill="currentColor"
        />
        <rect width="500" height="500" rx="60" fill="currentColor" />
        <rect y="600" width="500" height="500" rx="60" fill="currentColor" />
        <rect
          x="600"
          y="600"
          width="500"
          height="500"
          rx="60"
          fill="currentColor"
        />
      </svg>
      <span className="font-bold">Luc</span>
    </Link>
  );
}
