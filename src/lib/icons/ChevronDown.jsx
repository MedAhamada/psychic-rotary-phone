import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ChevronDown = ({ size = 18, ...props }) => {
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
        d="m12.75 4.375-5.937 5.938L.875 4.375"
      />
    </svg>
  );
};

export default ChevronDown;
