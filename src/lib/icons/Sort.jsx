import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Sort = ({ size = 18, ...props }) => {
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
          d="m6.75 7.46 2.025-2.025L10.8 7.46m-4.05 4.05 2.025 2.025L10.8 11.51"
        />
      </g>
    </svg>
  );
};

export default Sort;
