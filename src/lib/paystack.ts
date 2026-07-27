const PAYSTACK_SCRIPT_URL = 'https://js.paystack.co/v2/inline.js';
const PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string | undefined;

export const isPaystackConfigured = Boolean(PUBLIC_KEY);

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: PaystackSetupOptions) => { openIframe: () => void };
    };
  }
}

export interface PaystackSetupOptions {
  key: string;
  email: string;
  amount: number; // in kobo
  currency?: string;
  ref?: string;
  metadata?: Record<string, unknown>;
  onSuccess?: (response: { reference: string; status: string }) => void;
  onCancel?: () => void;
  callback?: (response: { reference: string; status: string }) => void;
  onClose?: () => void;
}

let scriptPromise: Promise<void> | null = null;

function loadPaystackScript(): Promise<void> {
  if (window.PaystackPop) return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = PAYSTACK_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Paystack script'));
    document.body.appendChild(script);
  });

  return scriptPromise;
}

export function generateReference(prefix = 'SKYICT'): string {
  const random = Math.random().toString(36).slice(2, 10).toUpperCase();
  return `${prefix}-${Date.now()}-${random}`;
}

export interface PayWithPaystackArgs {
  email: string;
  amountNaira: number;
  metadata?: Record<string, unknown>;
  reference?: string;
  onSuccess: (reference: string) => void;
  onClose?: () => void;
}

export async function payWithPaystack({
  email,
  amountNaira,
  metadata,
  reference,
  onSuccess,
  onClose,
}: PayWithPaystackArgs) {
  if (!PUBLIC_KEY) {
    throw new Error(
      'Paystack public key is missing. Set VITE_PAYSTACK_PUBLIC_KEY in your .env file.',
    );
  }

  await loadPaystackScript();

  if (!window.PaystackPop) {
    throw new Error('Paystack script failed to initialise.');
  }

  const ref = reference || generateReference();

  const handler = window.PaystackPop.setup({
    key: PUBLIC_KEY,
    email,
    amount: Math.round(amountNaira * 100), // Paystack expects kobo
    currency: 'NGN',
    ref,
    metadata,
    callback: (response) => {
      onSuccess(response.reference);
    },
    onClose: () => {
      onClose?.();
    },
  });

  handler.openIframe();

  return ref;
}
