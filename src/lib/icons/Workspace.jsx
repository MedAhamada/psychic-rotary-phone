import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Workspace = ({ size = 18, ...props }) => {
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
        d="M6.918 4.839a2.081 2.081 0 1 1 4.163 0 2.081 2.081 0 0 1-4.163 0Zm-5.043 8.322a2.081 2.081 0 1 1 4.163 0 2.081 2.081 0 0 1-4.163 0Zm10.088 0a2.081 2.081 0 1 1 4.163 0 2.081 2.081 0 0 1-4.163 0Zm-5.597-4.22-1.51 2.353m5.267-4.705 1.51 2.352m.33 4.219H9"
      />
    </svg>
  );
};

export default Workspace;
