import type { SVGProps, ReactElement } from 'react';

export type IconName =
  | 'radar'
  | 'graduation'
  | 'code'
  | 'building'
  | 'shield-check'
  | 'users'
  | 'award'
  | 'check'
  | 'arrow-right'
  | 'menu'
  | 'close'
  | 'phone'
  | 'mail'
  | 'map-pin'
  | 'clock'
  | 'chevron-down'
  | 'star'
  | 'wifi'
  | 'coffee'
  | 'briefcase'
  | 'monitor'
  | 'lock'
  | 'whatsapp'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'twitter';

const paths: Record<IconName, ReactElement> = {
  radar: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
      <path d="M12 12 L19 6" />
    </>
  ),
  graduation: (
    <>
      <path d="M2 9 12 4l10 5-10 5-10-5Z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
    </>
  ),
  code: (
    <>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m13 5-2 14" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </>
  ),
  'shield-check': (
    <>
      <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15.5 14a5 5 0 0 1 5.5 5" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12.5-1.5 8 5-2.5 5 2.5-1.5-8" />
    </>
  ),
  check: <path d="M5 12l5 5L20 7" />,
  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </>
  ),
  menu: (
    <>
      <path d="M3 6h18" />
      <path d="M3 12h18" />
      <path d="M3 18h18" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </>
  ),
  phone: (
    <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.6 21 3 14.4 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  'chevron-down': <path d="m6 9 6 6 6-6" />,
  star: <path d="m12 3 2.9 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.5L7.5 14l-5-4.4 6.6-.6L12 3Z" />,
  wifi: (
    <>
      <path d="M2 8.5a16 16 0 0 1 20 0" />
      <path d="M5.5 12.5a11 11 0 0 1 13 0" />
      <path d="M9 16.5a5.5 5.5 0 0 1 6 0" />
      <circle cx="12" cy="20" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  coffee: (
    <>
      <path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5Z" />
      <path d="M17 9h1.5a2.5 2.5 0 0 1 0 5H17" />
      <path d="M7 3.5c0 1-1 1-1 2s1 1 1 2M11 3.5c0 1-1 1-1 2s1 1 1 2" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="1.5" />
      <path d="M7.5 10.5V7a4.5 4.5 0 0 1 9 0v3.5" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm4.8 12.5c-.2.6-1.2 1.1-1.9 1.2-.5.1-1.1.1-3.5-.9-2.9-1.3-4.8-4.3-4.9-4.5-.1-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.6.7 2 .8 2.1.1.2.1.3 0 .5-.5 1-1 1-.7 1.5.9 1.7 1.9 2.3 3.3 3 .2.1.4.1.5-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1.2.1 1.6.8 1.9.9.3.2.5.2.6.4.1.1.1.7-.1 1.3Z" />
  ),
  facebook: <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.2-1.5 1.6-1.5H17V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.7 1.3-3.7 3.8V11H8.5v3H11v7h3Z" />,
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.5V17M8 7.5v.01M12 17v-4c0-1.4.9-2.5 2.3-2.5S16.5 11.6 16.5 13v4" />
    </>
  ),
  twitter: (
    <path d="M21 5.5c-.7.3-1.4.6-2.2.7a3.8 3.8 0 0 0 1.6-2.1 7.5 7.5 0 0 1-2.4.9 3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 3.6 4.4a3.8 3.8 0 0 0 1.2 5.1 3.7 3.7 0 0 1-1.7-.5v.05a3.8 3.8 0 0 0 3 3.7 3.8 3.8 0 0 1-1.7.07 3.8 3.8 0 0 0 3.5 2.6A7.6 7.6 0 0 1 2 17.4a10.7 10.7 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.3-1.2 1.8-1.9" />
  ),
};

export function Icon({
  name,
  size = 20,
  className = '',
  strokeWidth = 1.75,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  const isFilled = name === 'star' || name === 'whatsapp' || name === 'facebook' || name === 'twitter';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
