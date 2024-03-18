import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Exit = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M6.22287 7.99976H13.334"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.4453 10.3702C11.6007 12.1249 9.85308 13.3332 7.82792 13.3332C4.97767 13.3332 2.66753 10.9456 2.66753 7.99984C2.66753 5.05406 4.97767 2.6665 7.82792 2.6665C9.85308 2.6665 11.6007 3.8748 12.4453 5.62947"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00098 6.22217L6.2232 7.99995L8.00098 9.77772"
        stroke="currentColor"
        strokeWidth="0.888889"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Exit;
