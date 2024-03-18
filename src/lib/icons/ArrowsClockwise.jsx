import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ArrowsClockwise = ({ size = 18, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.259 2.39c.241 0 .437.197.437.438v2.625a.438.438 0 0 1-.437.438H9.634a.437.437 0 1 1 0-.875h2.187V2.828c0-.241.196-.437.438-.437Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 2.625a4.375 4.375 0 0 0-3.094 1.281.438.438 0 0 1-.619-.618 5.25 5.25 0 0 1 7.425 0l1.856 1.856a.437.437 0 1 1-.619.619l-1.856-1.857A4.374 4.374 0 0 0 7 2.625ZM1.303 8.547c0-.242.196-.438.438-.438h2.625a.437.437 0 1 1 0 .875H2.178v2.188a.438.438 0 0 1-.875 0V8.547Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.431 8.237a.44.44 0 0 1 .62 0l1.855 1.857a4.373 4.373 0 0 0 6.187 0 .438.438 0 0 1 .62.618 5.25 5.25 0 0 1-7.425 0L1.43 8.856a.438.438 0 0 1 0-.619Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default ArrowsClockwise;
