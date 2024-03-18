import React from 'react';

/**
 *
 * @param {*} size   - Number (default: 20)
 */
const Cash = ({ size = 20, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 17"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.5 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1V5Zm14 0h-13v7h13V5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM5.5 8.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm5.124-4.33a.5.5 0 0 1 .705-.046l4 3.5a.5.5 0 0 1-.658.752l-4-3.5a.5.5 0 0 1-.047-.705Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.376 8.67a.5.5 0 0 1-.047.706l-4 3.5a.5.5 0 0 1-.658-.752l4-3.5a.5.5 0 0 1 .705.047Zm-10-4.5a.5.5 0 0 1-.047.706l-4 3.5a.5.5 0 0 1-.658-.752l4-3.5a.5.5 0 0 1 .705.047Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.624 8.67a.5.5 0 0 1 .705-.046l4 3.5a.5.5 0 0 1-.658.752l-4-3.5a.5.5 0 0 1-.047-.705Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Cash;
