import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Email = ({ size = 18, ...props }) => {
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
          d="M3.477 3.784h11.045c.678 0 1.228.55 1.228 1.228v7.977c0 .678-.55 1.227-1.227 1.227H3.477a1.227 1.227 0 0 1-1.227-1.227V5.012c0-.678.55-1.228 1.227-1.228Z"
          clipRule="evenodd"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m2.34 4.556 5.77 4.128a1.5 1.5 0 0 0 1.744.001l5.803-4.14"
        />
      </g>
    </svg>
  );
};

export default Email;
