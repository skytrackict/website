import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Sellable } from '../types';
import { EnrollModal } from './EnrollModal';

interface EnrollmentContextValue {
  openEnroll: (item: Sellable) => void;
}

const EnrollmentContext = createContext<EnrollmentContextValue | null>(null);

export function EnrollmentProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<Sellable | null>(null);

  const openEnroll = useCallback((next: Sellable) => setItem(next), []);
  const close = useCallback(() => setItem(null), []);

  const value = useMemo(() => ({ openEnroll }), [openEnroll]);

  return (
    <EnrollmentContext.Provider value={value}>
      {children}
      {item && <EnrollModal item={item} onClose={close} />}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollment() {
  const ctx = useContext(EnrollmentContext);
  if (!ctx) throw new Error('useEnrollment must be used within EnrollmentProvider');
  return ctx;
}
