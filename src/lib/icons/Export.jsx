import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Export = ({ size = 18, ...props }) => {
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
        d="M8.785 10.342V2.577M6.098 5.26l2.688-2.69 2.688 2.688m2.09 3.797v5.56a.599.599 0 0 1-.597.597H4.605a.595.595 0 0 1-.597-.597v-5.56"
      />
    </svg>
  );
};

export default Export;
