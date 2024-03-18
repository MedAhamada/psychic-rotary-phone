import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const CurrentPosition = ({ size = 18, ...props }) => {
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
          d="M12.182 3.568a4.5 4.5 0 1 1-6.364 6.364 4.5 4.5 0 0 1 6.364-6.364Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 10.097v5.653l3-1.5 3 1.5v-5.653"
        />
      </g>
    </svg>
  );
};

export default CurrentPosition;
