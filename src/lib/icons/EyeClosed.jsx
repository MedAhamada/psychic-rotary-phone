import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const EyeClosed = ({ size = 18, ...props }) => {
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
        d="M9 14.25a5.208 5.208 0 0 1-1.878-.371m8.54-4.529c-1.42 2.625-4.04 4.9-6.662 4.9"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.31 6.69c.517.608.978 1.269 1.351 1.96a.74.74 0 0 1 0 .701M3.75 14.25l10.5-10.5m-6.92 6.92a2.363 2.363 0 0 1 3.34-3.341"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.783 5.217C11.623 4.319 10.31 3.75 9 3.75c-2.621 0-5.243 2.275-6.662 4.9a.74.74 0 0 0 0 .701c.71 1.312 1.72 2.536 2.879 3.433"
      />
    </svg>
  );
};

export default EyeClosed;
