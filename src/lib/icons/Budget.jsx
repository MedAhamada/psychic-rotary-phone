import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Budget = ({ size = 18, ...props }) => {
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
        d="M9.833 4.333C9.833 3.597 8.34 3 6.5 3s-3.332.597-3.333 1.333c0 .737 1.492 1.334 3.333 1.334 1.841 0 3.333-.597 3.333-1.334m.001 0v5.172M3.167 7c0 .737 1.492 1.333 3.334 1.333 1.841 0 3.333-.596 3.333-1.333m3.788 2.879a3 3 0 1 1-4.244 4.242 3 3 0 0 1 4.244-4.242Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.837 10.617C8.235 10.853 7.41 11 6.5 11c-1.84 0-3.333-.597-3.333-1.333"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.797 13.296c-.598.229-1.404.37-2.297.37-1.84 0-3.332-.596-3.333-1.333v-8"
      />
    </svg>
  );
};

export default Budget;
