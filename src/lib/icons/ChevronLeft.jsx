import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ChevronLeft = ({ size = 18, ...props }) => {
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
        d="M9.781 1.406 3.844 7.344 9.78 13.28"
      />
    </svg>
  );
};

export default ChevronLeft;
