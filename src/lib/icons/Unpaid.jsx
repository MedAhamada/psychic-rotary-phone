import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Unpaid = ({ size = 18, ...props }) => {
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
          d="M22 31.8H7.8C5.7 31.8 4 30.1 4 28V9.8C4 7.7 5.7 6 7.8 6h30.4C40.3 6 42 7.7 42 9.8V20"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M26.358 15.942a4.752 4.752 0 0 1 0 6.718 4.752 4.752 0 0 1-6.718 0 4.752 4.752 0 0 1 0-6.718 4.749 4.749 0 0 1 6.718 0ZM12 26h-2m26-14h-2m2 30c-4.418 0-8-3.58-8-7.998 0-4.328 3.68-8.004 8.008-8.002A8 8 0 0 1 36 42Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M38.4 34h-3.2v-3.2"
        />
      </g>
    </svg>
  );
};

export default Unpaid;
