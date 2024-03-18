import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Total = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M40 44H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4h32c2.21 0 4 1.79 4 4v32c0 2.21-1.79 4-4 4Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M36 38H12a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M22.828 21.172a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656ZM38 20h-4m4 8h-4"
        />
      </g>
    </svg>
  );
};

export default Total;
