import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const SortUp = ({ size = 18, ...props }) => {
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
          d="M7 10.025 9.025 8l2.025 2.025"
        />
      </g>
    </svg>
  );
};

export default SortUp;
