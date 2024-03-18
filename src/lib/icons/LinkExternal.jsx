import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const LinkExternal = ({ size = 18, ...props }) => {
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
        d="m9 9 6-6v4.667V3h-4.667"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 3H4.333C3.597 3 3 3.597 3 4.333v9.334C3 14.403 3.597 15 4.333 15h9.334c.736 0 1.333-.597 1.333-1.333V11"
      />
    </svg>
  );
};

export default LinkExternal;
