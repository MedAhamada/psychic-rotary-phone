import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Cross = ({ size = 18, ...props }) => {
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
        <g clipPath="url(#b)">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.332 4.046 3.668 14.711m10.664-.001L3.667 4.047"
          />
        </g>
      </g>
    </svg>
  );
};

export default Cross;
