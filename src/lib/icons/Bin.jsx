import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 * @param props
 */
const Bin = ({ size = 18, ...props }) => {
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
        d="M3.75 5.25h10.5m-.75 0v8.25A1.5 1.5 0 0 1 12 15H6a1.5 1.5 0 0 1-1.5-1.5V5.25m6.75-2.437h-4.5M7.5 8.25V12m3-3.75V12"
      />
    </svg>
  );
};

export default Bin;
