import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const Checkbox = ({ size = 18, ...props }) => {
  return (
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
        fill={props.isSelected ? '#5A88FF' : props.color}
      />
      <g clipPath="url(#clip0_1146_13339)">
        <path
          d="M8.62506 5.65625H13.3751C14.1624 5.65625 14.9175 5.96903 15.4743 6.52578C16.031 7.08253 16.3438 7.83764 16.3438 8.625V13.375C16.3438 14.1624 16.031 14.9175 15.4743 15.4742C14.9175 16.031 14.1624 16.3438 13.3751 16.3438H8.62506C7.8377 16.3438 7.08259 16.031 6.52584 15.4742C5.96909 14.9175 5.65631 14.1624 5.65631 13.375V8.625C5.65631 7.83764 5.96909 7.08253 6.52584 6.52578C7.08259 5.96903 7.8377 5.65625 8.62506 5.65625Z"
          stroke={props.isSelected ? 'white' : 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5547 12.3359L9.21881 11"
          stroke={props.isSelected ? 'white' : 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.7813 10.1094L10.5547 12.3359"
          stroke={props.isSelected ? 'white' : 'currentColor'}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1146_13339">
          <rect
            width="14.25"
            height="14.25"
            fill="white"
            transform="translate(3.875 3.875)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Checkbox;
