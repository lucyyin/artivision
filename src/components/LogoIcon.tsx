export function LogoIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" fill="var(--brand-blue)" />
      <path
        d="M6 12c0-3.314 2.686-6 6-6 2.355 0 4.403 1.354 5.4 3.333C16.5 9.5 14 10 14 12s2.5 2.5 3.4 2.667C16.403 16.646 14.355 18 12 18c-3.314 0-6-2.686-6-6Z"
        fill="white"
        fillOpacity=".9"
      />
      <path
        d="M9 8c2 0 3 .667 3 2s-1 2-3 2M12 14c0 1.333.667 2 2 2"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}


