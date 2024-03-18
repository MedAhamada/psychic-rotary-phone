import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 * @param props
 */
const ErrorIcon = ({ size = 18, ...props }) => {
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
          d="m5.56 15.31-2.87-2.87a1.5 1.5 0 0 1-.44-1.061V6.621c0-.398.158-.78.44-1.06l2.87-2.872a1.5 1.5 0 0 1 1.061-.439h4.757a1.5 1.5 0 0 1 1.06.44l2.872 2.87a1.5 1.5 0 0 1 .44 1.061v4.757a1.5 1.5 0 0 1-.44 1.06L12 15.75H6.621a1.5 1.5 0 0 1-1.06-.44Zm1.19-4.06 4.5-4.5m0 4.5-4.5-4.5"
        />
      </g>
    </svg>
  );
};

export default ErrorIcon;
