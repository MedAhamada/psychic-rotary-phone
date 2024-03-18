import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Crown = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 14 14"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m11.134 9.305.55-4.147a.313.313 0 0 0-.449-.325L9.451 6.191a.313.313 0 0 1-.456-.066L7.235 3.55a.312.312 0 0 0-.47 0l-1.76 2.575a.313.313 0 0 1-.456.065L2.765 4.833a.312.312 0 0 0-.45.325l.55 4.147h8.27Zm-8.196 1.25h8.124"
        />
      </g>
    </svg>
  );
};

export default Crown;
