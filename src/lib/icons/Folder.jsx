import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Folder = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 14 12"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.5 3a.5.5 0 0 1 .5-.5h11.5a1 1 0 0 1 1 1v7.056a.945.945 0 0 1-.944.944H1.46a.963.963 0 0 1-.96-.96V3Zm12 7.5h-11v-7h11v7Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.793.793A1 1 0 0 1 1.5.5h3.293A1 1 0 0 1 5.5.793l1.854 1.853a.5.5 0 1 1-.708.708L4.793 1.5H1.5V3a.5.5 0 0 1-1 0V1.5A1 1 0 0 1 .793.793Zm5.603 8.561a.5.5 0 0 1 0-.708L7.793 7.25 6.396 5.854a.5.5 0 1 1 .708-.708l1.75 1.75a.5.5 0 0 1 0 .708l-1.75 1.75a.5.5 0 0 1-.708 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 7.25a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Folder;
