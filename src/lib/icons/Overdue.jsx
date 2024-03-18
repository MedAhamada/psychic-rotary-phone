import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Overdue = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 48 48"
    >
      <g clipPath="url(#a)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M12 42H8a2 2 0 0 1-2-2V28a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2Zm14-8h4.666c.866 0 1.708-.28 2.4-.8l4.832-3.624a3.03 3.03 0 0 1 3.96 4.566l-4.146 4.146a8.008 8.008 0 0 1-4.088 2.188l-5.86 1.172a7.997 7.997 0 0 1-3.51-.084l-5.3-1.324a7.914 7.914 0 0 0-1.938-.24H14"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M26 34h2.97A3.03 3.03 0 0 0 32 30.97v-.606c0-1.39-.946-2.602-2.294-2.938l-4.584-1.146a9.38 9.38 0 0 0-7.488 1.298L14 30m20.337-19.69a5.676 5.676 0 1 1-8.027 8.027 5.676 5.676 0 0 1 8.027-8.027Z"
        />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.4"
          d="M29.262 8.75a5.633 5.633 0 0 0-1.574-3.088 5.676 5.676 0 0 0-8.026 8.026 5.665 5.665 0 0 0 5.074 1.56"
        />
      </g>
    </svg>
  );
};

export default Overdue;
