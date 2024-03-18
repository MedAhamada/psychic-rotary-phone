import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 * @param props
 */
const Eye = ({ size = 18, ...props }) => {
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
        d="M2.338 9.35a.74.74 0 0 1 0-.701C3.758 6.025 6.378 3.75 9 3.75c2.621 0 5.242 2.275 6.661 4.9a.74.74 0 0 1 0 .701C14.242 11.975 11.621 14.25 9 14.25c-2.621 0-5.243-2.275-6.662-4.9Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.591 7.409a2.25 2.25 0 1 1-3.182 3.182 2.25 2.25 0 0 1 3.182-3.182Z"
      />
    </svg>
  );
};

export default Eye;
