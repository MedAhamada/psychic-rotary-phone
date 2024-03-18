import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Checkmark = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
      data-testid="checkmark-icon"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15 4.875-8.25 8.25L3 9.375"
        />
      </g>
    </svg>
  );
};

export default Checkmark;
