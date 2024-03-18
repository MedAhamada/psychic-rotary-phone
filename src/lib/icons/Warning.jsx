import React from 'react';

/**
 *
 * @param {*} size  - huge | big | medium | small | tiny
 * @param props
 */
const Warning = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 18 18"
      data-testid="warning-icon"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9.84V7.035"
        />
        <path
          fill="currentColor"
          d="M8.998 11.425a.5.5 0 1 0 .004 1 .5.5 0 0 0-.004-1Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10.522 3.104 5.744 10.053c.667 1.169-.176 2.623-1.522 2.623H3.256c-1.347 0-2.19-1.454-1.522-2.623L7.478 3.104c.673-1.178 2.37-1.178 3.044 0Z"
        />
      </g>
    </svg>
  );
};

export default Warning;
