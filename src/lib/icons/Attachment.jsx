import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Attachment = ({ size = 18, ...props }) => {
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
          d="m13.084 9.583 1.75-1.75a3.3 3.3 0 0 0-4.668-4.667l-1.75 1.75m-1.749 6.416 4.665-4.665M4.916 8.416l-1.75 1.75a3.3 3.3 0 0 0 4.668 4.668l1.75-1.75"
        />
      </g>
    </svg>
  );
};

export default Attachment;
