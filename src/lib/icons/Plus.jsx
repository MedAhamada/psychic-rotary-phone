import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Plus = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 3.643v10.714M14.357 9H3.643"
      />
    </svg>
  );
};

export default Plus;
