import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Key = ({ size = 18, ...props }) => {
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
          strokeMiterlimit={10}
          d="M11.273 7.007a.28.28 0 1 0-.563.001.281.281 0 0 0 .563 0"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          d="m9.374 11.089-.772.774H7.228v1.102H6.129v1.377l-1.03 1.033H2.624v-2.479l4.292-4.302A4.392 4.392 0 0 1 7.9 3.911a4.372 4.372 0 0 1 6.192 0 4.396 4.396 0 0 1 0 6.207 4.373 4.373 0 0 1-4.719.97Z"
        />
      </g>
    </svg>
  );
};

export default Key;
