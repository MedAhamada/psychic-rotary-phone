import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Send = ({ size = 18, ...props }) => {
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
          d="m6.565 9.112 1.329 5.976c.165.745 1.155.906 1.547.252l6.187-10.312a.843.843 0 0 0-.723-1.278H3.24c-.752 0-1.128.909-.597 1.44l3.921 3.922ZM15.63 4.17 6.562 9.113"
        />
      </g>
    </svg>
  );
};

export default Send;
