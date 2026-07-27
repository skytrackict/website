import { Button } from './Button';
import { useEnrollment } from './EnrollmentProvider';
import type { Sellable } from '../types';

export function EnrollButton({
  item,
  label = 'Enrol / Book Now',
  variant = 'primary',
  size = 'md',
  className,
}: {
  item: Sellable;
  label?: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const { openEnroll } = useEnrollment();
  return (
    <Button variant={variant} size={size} className={className} onClick={() => openEnroll(item)}>
      {label}
    </Button>
  );
}
