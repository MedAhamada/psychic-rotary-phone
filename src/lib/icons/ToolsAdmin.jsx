import React from 'react';

/**
 *
 * @param {*} size  - Number (default: 18)
 */
const ToolsAdmin = ({ size = 18, ...props }) => {
  return props.isSelected ? (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4C0 1.79086 1.79086 0 4 0H18C20.2092 0 22 1.79086 22 4V18C22 20.2091 20.2092 22 18 22H4C1.79086 22 0 20.2091 0 18V4Z"
        fill="url(#paint0_linear_1196_13187)"
      />
      <g clipPath="url(#clip0_1196_13187)">
        <path
          d="M5.55809 7.33818L7.3381 5.55818C7.58185 5.31443 7.97747 5.31443 8.22185 5.55818L16.4419 13.7782C16.6856 14.0219 16.6856 14.4176 16.4419 14.6619L14.6619 16.4419C14.4181 16.6857 14.0225 16.6857 13.7781 16.4419L5.55809 8.22193C5.31372 7.97755 5.31372 7.58193 5.55809 7.33818Z"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3313 9.6687L11.3938 10.6062"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.95 11.2875L13.325 11.9125"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4375 12.775L14.5 13.7125"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8438 8.18127L10.2188 8.80002"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.22498 6.5625L8.28748 7.5"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2213 8.55748L14.0101 5.76873C14.4951 5.28373 15.2838 5.28623 15.7719 5.77436L16.2194 6.22186C16.7076 6.70998 16.7101 7.49873 16.2251 7.98373L13.4363 10.7725"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.55747 11.2212L6.03872 13.7399C5.95997 13.8187 5.90372 13.9174 5.8756 14.0256L5.41185 15.8199C5.29184 16.2837 5.71435 16.7056 6.1781 16.5843L7.96872 16.1174C8.07622 16.0893 8.17435 16.0331 8.2531 15.9543L10.7725 13.4349"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.95 6.83118L15.1625 9.04368"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
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

        <clipPath id="clip0_1196_13187">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(3.49989 3.5)"
          />
        </clipPath>
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
      <rect width={size} height={size} rx="4" fill="#F7F9FC " />
      <g clipPath="url(#clip0_1161_15117)">
        <path
          d="M5.55809 7.33818L7.3381 5.55818C7.58185 5.31443 7.97747 5.31443 8.22185 5.55818L16.4419 13.7782C16.6856 14.0219 16.6856 14.4176 16.4419 14.6619L14.6619 16.4419C14.4181 16.6857 14.0225 16.6857 13.7781 16.4419L5.55809 8.22193C5.31372 7.97755 5.31372 7.58193 5.55809 7.33818Z"
          stroke="url(#paint0_linear_1161_15117)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.3313 9.6687L11.3938 10.6062"
          stroke="url(#paint1_linear_1161_15117)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.95 11.2875L13.325 11.9125"
          stroke="url(#paint2_linear_1161_15117)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4375 12.775L14.5 13.7125"
          stroke="url(#paint3_linear_1161_15117)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.8438 8.18127L10.2188 8.80002"
          stroke="url(#paint4_linear_1161_15117)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.22498 6.5625L8.28748 7.5"
          stroke="url(#paint5_linear_1161_15117)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.2213 8.55748L14.0101 5.76873C14.4951 5.28373 15.2838 5.28623 15.7719 5.77436L16.2194 6.22186C16.7076 6.70998 16.7101 7.49873 16.2251 7.98373L13.4363 10.7725"
          stroke="url(#paint6_linear_1161_15117)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.55747 11.2212L6.03872 13.7399C5.95997 13.8187 5.90372 13.9174 5.8756 14.0256L5.41185 15.8199C5.29184 16.2837 5.71435 16.7056 6.1781 16.5843L7.96872 16.1174C8.07622 16.0893 8.17435 16.0331 8.2531 15.9543L10.7725 13.4349"
          stroke="url(#paint7_linear_1161_15117)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.95 6.83118L15.1625 9.04368"
          stroke="url(#paint8_linear_1161_15117)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1161_15117"
          x1="16.6247"
          y1="11.9736"
          x2="5.37481"
          y2="11.9736"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1161_15117"
          x1="12.3313"
          y1="10.2186"
          x2="11.3938"
          y2="10.2186"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1161_15117"
          x1="13.95"
          y1="11.6541"
          x2="13.325"
          y2="11.6541"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1161_15117"
          x1="15.4375"
          y1="13.3249"
          x2="14.5"
          y2="13.3249"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_1161_15117"
          x1="10.8438"
          y1="8.54419"
          x2="10.2188"
          y2="8.54419"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_1161_15117"
          x1="9.22498"
          y1="7.11238"
          x2="8.28748"
          y2="7.11238"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_1161_15117"
          x1="16.5872"
          y1="8.5539"
          x2="11.2213"
          y2="8.5539"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_1161_15117"
          x1="10.7725"
          y1="14.3792"
          x2="5.3912"
          y2="14.3792"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_1161_15117"
          x1="15.1625"
          y1="8.12889"
          x2="12.95"
          y2="8.12889"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2062D9" />
          <stop offset="1" stopColor="#67CBF6" />
        </linearGradient>
        <clipPath id="clip0_1161_15117">
          <rect
            width="15"
            height="15"
            fill="white"
            transform="translate(3.50002 3.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ToolsAdmin;
