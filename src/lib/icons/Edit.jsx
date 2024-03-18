import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Edit = ({ size = 18, ...props }) => {
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
          d="m12.922 7.99-2.498-2.498m-5.206 9.922H3v-2.218a.68.68 0 0 1 .2-.482l9.099-9.1a.682.682 0 0 1 .965 0L14.8 5.15a.682.682 0 0 1 0 .965l-9.1 9.1a.68.68 0 0 1-.482.2Z"
        />
      </g>
    </svg>
  );
};

export default Edit;
