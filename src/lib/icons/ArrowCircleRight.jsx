import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ArrowCircleRight = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11 9H3m1 2.667C4.95 13.64 6.916 15 9.195 15 12.4 15 15 12.314 15 9s-2.599-6-5.805-6C6.916 3 4.95 4.36 4 6.333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9 7 2 2-2 2"
      />
    </svg>
  );
};

export default ArrowCircleRight;
