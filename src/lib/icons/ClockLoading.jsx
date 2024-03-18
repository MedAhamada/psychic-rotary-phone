import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ClockLoading = ({ size = 18, ...props }) => {
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
          d="m16.622 8.58-1.265-1.267L14.09 8.58"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.356 7.313v1.688a6.749 6.749 0 0 1-6.75 6.749 6.75 6.75 0 1 1 0-13.5c2.13 0 4.028.99 5.265 2.531"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.134 11.152-2.738-1.63V5.99"
        />
      </g>
    </svg>
  );
};

export default ClockLoading;
