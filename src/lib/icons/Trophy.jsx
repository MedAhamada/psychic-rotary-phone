import React from 'react';

/**
 *
 * @param {*} size   - Number (default: 20)
 */
const Trophy = ({ size = 20, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.965 11.5h0C5.453 11.483 3.5 9.6 3.5 7.403V4.5A.5.5 0 0 1 4 4h8a.5.5 0 0 1 .5.5v2.967A3.67 3.67 0 0 1 12.16 9a4.036 4.036 0 0 1-.974 1.312c-.42.377-.92.678-1.473.883a4.955 4.955 0 0 1-1.749.304Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 14a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 11a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0v-2.5A.5.5 0 0 1 8 11Zm4-6.5a.5.5 0 0 1 .5-.5h2a1 1 0 0 1 1 1v1A2.5 2.5 0 0 1 13 8.5h-.612C12.112 8.5 12 8.276 12 8s.112-.5.388-.5H13A1.5 1.5 0 0 0 14.5 6V5h-2a.5.5 0 0 1-.5-.5ZM.785 4.293A1 1 0 0 1 1.492 4h2a.5.5 0 1 1 0 1h-2v1a1.5 1.5 0 0 0 1.5 1.5h.63C3.9 7.5 4 7.724 4 8s-.101.5-.377.5h-.631A2.5 2.5 0 0 1 .492 6V5a1 1 0 0 1 .293-.707Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default Trophy;
