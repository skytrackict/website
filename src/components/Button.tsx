import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import clsx from 'clsx';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline-light';
type Size = 'md' | 'lg' | 'sm';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-amber text-ink hover:bg-amber-dark shadow-[0_1px_0_rgba(0,0,0,0.05)]',
  secondary:
    'bg-ink text-white hover:bg-ink-2',
  ghost:
    'bg-transparent text-ink hover:bg-mist border border-line',
  'outline-light':
    'bg-transparent text-white border border-white/30 hover:bg-white/10',
};

const sizeClasses: Record<Size, string> = {
  sm: 'text-sm px-4 py-2',
  md: 'text-[0.95rem] px-5 py-3',
  lg: 'text-base px-7 py-3.5',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  icon?: boolean;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  to: string;
  href?: never;
}

interface AnchorButtonProps extends CommonProps {
  href: string;
  to?: never;
}

interface NativeButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> {
  to?: never;
  href?: never;
}

type ButtonProps = LinkButtonProps | AnchorButtonProps | NativeButtonProps;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 focus-visible:outline-2 focus-visible:outline-amber disabled:opacity-50 disabled:pointer-events-none';

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'md', icon = false, className, children } = props;
  const cls = clsx(base, variantClasses[variant], sizeClasses[size], className);

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={cls}>
        {children}
        {icon && <Icon name="arrow-right" size={16} />}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const external = props.href.startsWith('http') || props.href.startsWith('mailto') || props.href.startsWith('tel');
    return (
      <a
        href={props.href}
        className={cls}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {children}
        {icon && <Icon name="arrow-right" size={16} />}
      </a>
    );
  }

  const { variant: _v, size: _s, icon: _i, className: _c, children: _ch, to: _to, href: _href, ...rest } =
    props as NativeButtonProps;
  return (
    <button className={cls} {...rest}>
      {children}
      {icon && <Icon name="arrow-right" size={16} />}
    </button>
  );
}
