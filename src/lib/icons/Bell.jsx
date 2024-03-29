import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Bell = ({ size = 18, ...props }) => {
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
        d="M7.28 13.758v.274a1.719 1.719 0 0 0 3.439-.001v-.274m-.344-9.444v-.688a1.375 1.375 0 1 0-2.75 0v.688"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.922 7.641A3.398 3.398 0 0 1 8.32 4.243h1.36a3.398 3.398 0 0 1 3.4 3.397v2.098c0 .397.158.779.439 1.06l.48.481a1.5 1.5 0 0 1 .44 1.06c0 .784-.634 1.418-1.417 1.418H4.98a1.417 1.417 0 0 1-1.418-1.417c0-.398.159-.78.44-1.061l.48-.48a1.5 1.5 0 0 0 .44-1.061V7.64Z"
      />
    </svg>
  );
};

export default Bell;
