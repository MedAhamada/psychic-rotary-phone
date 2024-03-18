import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Grid = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 14 14"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.965 3.035a.05.05 0 1 1 .07-.07.05.05 0 0 1-.07.07m4.07-.07a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m4 0a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m-8 4a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m3.93.07a.05.05 0 1 1 .07-.07.05.05 0 0 1-.07.07m4.07-.07a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m-8.07 4.07a.05.05 0 1 1 .07-.07.05.05 0 0 1-.07.07m4.07-.07a.05.05 0 1 1-.07.07.05.05 0 0 1 .07-.07m3.93 0a.05.05 0 0 1 .07.07.05.05 0 0 1-.07-.07"
        />
      </g>
    </svg>
  );
};

export default Grid;
