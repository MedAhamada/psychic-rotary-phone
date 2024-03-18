import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Link = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.31 3.092a2.25 2.25 0 0 1 2.452.489L8 4.818a.5.5 0 1 0 .707-.707L7.47 2.874a3.251 3.251 0 0 0-5.302 3.542c.164.394.403.752.705 1.054l1.768 1.768a3.25 3.25 0 0 0 4.596 0 .5.5 0 0 0-.707-.707 2.25 2.25 0 0 1-3.182 0L3.58 6.763a2.251 2.251 0 0 1 .73-3.67Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9.06 6.811a2.25 2.25 0 0 1 1.592.659l1.768 1.768a2.25 2.25 0 1 1-3.182 3.182L8 11.182a.5.5 0 1 0-.707.707l1.237 1.238a3.25 3.25 0 1 0 4.597-4.596l-1.768-1.768a3.25 3.25 0 0 0-4.596 0 .5.5 0 0 0 .707.707 2.25 2.25 0 0 1 1.59-.659Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Link;
