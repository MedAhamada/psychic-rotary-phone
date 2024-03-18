import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Download = ({ size = 18, ...props }) => {
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
          d="M9 12.75V2.25m6 13.5H3M12.75 9l-3.751 3.75L5.249 9"
        />
      </g>
    </svg>
  );
};

export default Download;
