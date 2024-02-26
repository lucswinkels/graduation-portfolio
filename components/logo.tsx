"use client";

import Link from "next/link";

type Props = {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};
export function Logo(props: Props) {
  return (
    <Link href="/" className="size-8" onClick={props.onClick}>
      <svg
        id="logo"
        data-name="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20.92 19.44"
      >
        <g>
          <g>
            <polygon
              className="fill-current"
              points="2.93 1.26 0 0 0 6.79 2.93 8.1 2.93 1.26"
            />
            <path
              className="fill-current"
              d="M16.4,16.1c-.62,.52-1.49,.46-1.45,.46H2.93v-6.46l-2.93-1.31v10.65H15.93s2.02-.43,3.19-2.13l-2.72-1.21Z"
            />
            <path
              className="fill-current"
              d="M20.92,12.59c0-4.02-2.87-5.67-7.81-5.67-.88,0-1.85-.53-1.85-1.85s1.25-2.21,1.25-2.21h4.92l1.75-2.87h-6.67s-4.11,.47-4.11,5.12,4.21,5.02,4.21,5.02h3.34s2.06,.29,2.06,2.44c0,.76-.27,1.22-.62,1.51l2.72,1.21c.47-.68,.8-1.57,.8-2.72Z"
            />
          </g>
        </g>
      </svg>
    </Link>
  );
}
