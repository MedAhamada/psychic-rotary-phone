import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ArrowClockwise = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 12 11"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.26.89c.24 0 .437.197.437.438v2.625a.438.438 0 0 1-.438.438H8.634a.437.437 0 1 1 0-.875h2.188V1.328c0-.242.196-.437.437-.437Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.854 1.21a4.375 4.375 0 1 0 2.24 7.384.438.438 0 0 1 .618.618 5.25 5.25 0 1 1 0-7.424l1.857 1.856a.438.438 0 0 1-.62.619L9.095 2.406a4.375 4.375 0 0 0-2.24-1.197Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

ArrowClockwise.propTypes = {
  size: PropTypes.number,
};

export default ArrowClockwise;
