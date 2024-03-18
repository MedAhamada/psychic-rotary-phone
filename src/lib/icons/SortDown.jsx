import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const SortDown = ({ size = 18, ...props }) => {
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
          d="m7 8 2.025 2.025L11.05 8"
        />
      </g>
    </svg>
  );
};

export default SortDown;
