import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Facture = ({ size = 18, ...props }) => {
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
          d="M4.5 5.063v8.157a.563.563 0 0 0 .31.503l.557.28a.563.563 0 0 0 .502.001l.884-.437.867.435a.563.563 0 0 0 .503.001L9 13.567l.877.436a.561.561 0 0 0 .503 0l.867-.436.884.437a.562.562 0 0 0 .502-.001l.557-.28a.563.563 0 0 0 .31-.503V5.062a1.125 1.125 0 0 0-1.125-1.125h-6.75A1.125 1.125 0 0 0 4.5 5.063Zm6.75 1.687h-4.5m0 1.969h4.5m-4.5 1.969h4.5"
        />
      </g>
    </svg>
  );
};

export default Facture;
