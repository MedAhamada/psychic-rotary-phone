import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Graph = ({ size = 18, ...props }) => {
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
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.406 13.781H4.75a.53.53 0 0 1-.531-.53v-2.126a.53.53 0 0 1 .53-.53h2.657m3.188-5.845v9.031h2.656a.531.531 0 0 0 .53-.53V4.75a.53.53 0 0 0-.53-.531h-2.125a.531.531 0 0 0-.531.53Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.594 13.781H7.405V7.937a.53.53 0 0 1 .53-.53h2.657"
        />
      </g>
    </svg>
  );
};

export default Graph;
