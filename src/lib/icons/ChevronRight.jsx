import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ChevronRight = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.78"
        d="m3.844 1.406 5.938 5.938-5.938 5.937"
      />
    </svg>
  );
};

export default ChevronRight;
