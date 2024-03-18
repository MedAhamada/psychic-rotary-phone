import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Duplicate = ({ size = 18, ...props }) => {
  return props.isSelected ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={size}
        height={size}
        rx="4"
        fill="url(#paint0_linear_1196_13187)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.24988 6.5V12.5C7.24988 13.7426 8.25724 14.75 9.49988 14.75H15.4999C16.7425 14.75 17.7499 13.7426 17.7499 12.5V6.5C17.7499 5.25736 16.7425 4.25 15.4999 4.25H9.49988C8.25724 4.25 7.24988 5.25736 7.24988 6.5Z"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7499 14.75V15.5C14.7499 16.7426 13.7425 17.75 12.4999 17.75H6.49988C5.25724 17.75 4.24988 16.7426 4.24988 15.5V9.5C4.24988 8.25736 5.25724 7.25 6.49988 7.25H7.24988"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5005 11V8"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9999 9.49951H13.9999"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1196_13187"
          x1="22"
          y1="12.9038"
          x2="0"
          y2="12.9038"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={size} height={size} rx="4" fill="#F7F9FC" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.24988 6.5V12.5C7.24988 13.7426 8.25724 14.75 9.49988 14.75H15.4999C16.7425 14.75 17.7499 13.7426 17.7499 12.5V6.5C17.7499 5.25736 16.7425 4.25 15.4999 4.25H9.49988C8.25724 4.25 7.24988 5.25736 7.24988 6.5Z"
        stroke="url(#paint0_linear_1598_25148)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.7499 14.75V15.5C14.7499 16.7426 13.7425 17.75 12.4999 17.75H6.49988C5.25724 17.75 4.24988 16.7426 4.24988 15.5V9.5C4.24988 8.25736 5.25724 7.25 6.49988 7.25H7.24988"
        stroke="url(#paint1_linear_1598_25148)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5005 11V8"
        stroke="url(#paint2_linear_1598_25148)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9999 9.49951H13.9999"
        stroke="url(#paint3_linear_1598_25148)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1598_25148"
          x1="17.7499"
          y1="10.4087"
          x2="7.24988"
          y2="10.4087"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1598_25148"
          x1="14.7499"
          y1="13.4087"
          x2="4.24988"
          y2="13.4087"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1598_25148"
          x1="12.8755"
          y1="9.75962"
          x2="12.1255"
          y2="9.75962"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1598_25148"
          x1="13.9999"
          y1="9.56442"
          x2="10.9999"
          y2="9.56442"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Duplicate;
