import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Search = ({ size = 18, ...props }) => {
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
        d="M8.16 13.155a4.994 4.994 0 1 0 0-9.988 4.994 4.994 0 0 0 0 9.988Zm3.533-1.462 3.14 3.14"
      />
    </svg>
  );
};

export default Search;
