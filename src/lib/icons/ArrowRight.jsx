import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ArrowRight = ({ size = 18, ...props }) => {
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
          d="M3.36 8.985h11.242m-4.49-4.494L14.64 9l-4.528 4.509"
        />
      </g>
    </svg>
  );
};

export default ArrowRight;
