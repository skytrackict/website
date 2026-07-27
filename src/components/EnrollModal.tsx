import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { Icon } from './Icon';
import { Button } from './Button';
import type { Sellable } from '../types';
import { payWithPaystack, isPaystackConfigured, generateReference } from '../lib/paystack';
import { recordEnrollment } from '../lib/submissions';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

type Stage = 'form' | 'processing' | 'success' | 'error';

export function EnrollModal({ item, onClose }: { item: Sellable; onClose: () => void }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [stage, setStage] = useState<Stage>('form');
  const [errorMessage, setErrorMessage] = useState('');
  const [reference, setReference] = useState('');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && stage !== 'processing' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, stage]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage('');

    if (!isPaystackConfigured) {
      setErrorMessage(
        'Payments are not fully configured yet. Add VITE_PAYSTACK_PUBLIC_KEY to your .env file to accept live payments.',
      );
      setStage('error');
      return;
    }

    setStage('processing');
    const ref = generateReference(item.kind.toUpperCase().replace(/-/g, ''));
    setReference(ref);

    try {
      await payWithPaystack({
        email,
        amountNaira: item.amount,
        reference: ref,
        metadata: {
          fullName,
          phone,
          itemId: item.id,
          itemName: item.name,
          kind: item.kind,
        },
        onSuccess: async (successRef) => {
          await recordEnrollment({
            fullName,
            email,
            phone,
            itemId: item.id,
            itemName: item.name,
            amountKobo: Math.round(item.amount * 100),
            reference: successRef,
            status: 'success',
            createdAt: new Date().toISOString(),
          });
          setStage('success');
        },
        onClose: () => {
          setStage((s) => (s === 'processing' ? 'form' : s));
        },
      });
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStage('error');
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center bg-ink/60 backdrop-blur-sm p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Enrol for ${item.name}`}
    >
      <div className="relative w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl shadow-card-hover max-h-[92svh] overflow-y-auto">
        <div className="sticky top-0 bg-white flex items-start justify-between p-6 pb-4 border-b border-line">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-signal">
              {stage === 'success' ? 'Booking confirmed' : 'Enrol / Book Now'}
            </p>
            <h3 className="mt-1 text-lg font-bold text-ink leading-snug">{item.name}</h3>
            <p className="mt-0.5 text-sm text-slate">{item.description}</p>
          </div>
          <button
            onClick={onClose}
            disabled={stage === 'processing'}
            className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center hover:bg-mist disabled:opacity-40"
            aria-label="Close"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="p-6">
          {stage === 'success' ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-success/10 text-success flex items-center justify-center">
                <Icon name="check" size={26} />
              </div>
              <p className="mt-4 font-semibold text-ink">Payment successful</p>
              <p className="mt-1.5 text-sm text-slate">
                Reference <span className="font-mono text-ink">{reference}</span>. A confirmation has been sent to{' '}
                <span className="font-medium text-ink">{email}</span>. Our team will follow up with full details.
              </p>
              <Button onClick={onClose} className="mt-6 w-full justify-center">
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-mist">
                <span className="text-sm font-medium text-slate">Amount due</span>
                <span className="font-display text-xl font-bold text-ink">{naira(item.amount)}</span>
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="fullName">
                  Full name
                </label>
                <input
                  id="fullName"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-signal focus:ring-1 focus:ring-signal outline-none"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-signal focus:ring-1 focus:ring-signal outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ink mb-1.5" htmlFor="phone">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-line px-4 py-3 text-sm focus:border-signal focus:ring-1 focus:ring-signal outline-none"
                  placeholder="0801 234 5678"
                />
              </div>

              {stage === 'error' && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl p-3">{errorMessage}</p>
              )}

              <Button type="submit" disabled={stage === 'processing'} className="w-full justify-center">
                {stage === 'processing' ? 'Opening secure checkout…' : `Pay ${naira(item.amount)} with Paystack`}
              </Button>
              <p className="text-xs text-slate text-center flex items-center justify-center gap-1.5">
                <Icon name="lock" size={13} />
                Secured by Paystack. SkyTrack ICT never stores your card details.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
