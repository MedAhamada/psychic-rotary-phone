import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Info = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
      data-testid="info-icon"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.871 15a6.128 6.128 0 1 1 0-12.257 6.128 6.128 0 1 1 0 12.257Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.871 12.276V8.871h-.68"
      />
      <circle cx="8.701" cy="6.318" r=".681" fill="currentColor" />
    </svg>
  );
};

export default Info;
