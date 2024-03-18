import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Column = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <g clipPath="url(#a)">
        <rect
          width="13.506"
          height="13.506"
          x="2.251"
          y="15.757"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          rx="1.5"
          transform="rotate(-90 2.251 15.757)"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.255 15.757V2.25M6.753 15.757V2.25"
        />
      </g>
    </svg>
  );
};

export default Column;
