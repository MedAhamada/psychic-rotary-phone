import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 * @param props
 */
const Calendar = ({ size = 18, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_6504_80400)">
        <path
          d="M3.93629 1V2H2.41248C1.57121 2 0.888672 2.67188 0.888672 3.5V5H15.1109V3.5C15.1109 2.67188 14.4284 2 13.5871 2H12.0633V1C12.0633 0.446875 11.6093 0 11.0474 0C10.4855 0 10.0315 0.446875 10.0315 1V2H5.96804V1C5.96804 0.446875 5.51407 0 4.95216 0C4.39026 0 3.93629 0.446875 3.93629 1ZM15.1109 6H0.888672V14.5C0.888672 15.3281 1.57121 16 2.41248 16H13.5871C14.4284 16 15.1109 15.3281 15.1109 14.5V6Z"
          fill="#5A88FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_6504_80400">
          <rect
            width="14.2222"
            height="16"
            fill="white"
            transform="translate(0.888672)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Calendar;
