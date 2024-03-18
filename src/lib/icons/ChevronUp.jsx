import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ChevronUp = ({ size = 18, ...props }) => {
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
        d="M12.75 10.313 6.814 4.375.875 10.313"
      />
    </svg>
  );
};

export default ChevronUp;
