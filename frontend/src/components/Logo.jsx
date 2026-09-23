import React from "react";

export const LogoMark = ({ className = "", size = 32 }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M38 13.5A17 17 0 1 0 38 34.5"
      stroke="#C84C32"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <rect x="20" y="18" width="12" height="12" rx="2" stroke="#F2F0E9" strokeWidth="3" />
    <circle cx="26" cy="24" r="1.8" fill="#C84C32" />
  </svg>
);

export const Logo = ({ className = "" }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <LogoMark size={30} />
    <span className="font-display font-extrabold tracking-tight text-[1.35rem] leading-none text-[#F2F0E9]">
      CIKALA
    </span>
  </div>
);
