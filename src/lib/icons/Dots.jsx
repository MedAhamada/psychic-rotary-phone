import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Dots = ({ size = 18, ...props }) => {
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
        d="M9.001 9.656a.281.281 0 1 0-.003-.562.281.281 0 0 0 .003.562m-3.25 0a.281.281 0 1 0-.003-.562.281.281 0 0 0 .003.562m6.501 0a.281.281 0 1 0-.003-.562.281.281 0 0 0 .002.562"
      />
    </svg>
  );
};

export default Dots;
