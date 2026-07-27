import type { EnrollmentRecord, ContactMessageRecord } from '../types';
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ENVIRONMENT } from './contentful';

const MANAGEMENT_TOKEN = import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN as string | undefined;

export const canWriteToContentful = Boolean(CONTENTFUL_SPACE_ID && MANAGEMENT_TOKEN);

const CMA_BASE = 'https://api.contentful.com';

/**
 * IMPORTANT — read before using in production:
 * Writing to Contentful from the browser requires a Content Management API
 * token, which grants full read/write access to your Contentful space.
 * Shipping that token in a Vite `VITE_...` env var bundles it into the
 * public JS, where anyone can extract and reuse it.
 *
 * This is acceptable for a prototype or an internal tool behind auth, but
 * for a public production site we strongly recommend proxying this call
 * through a small serverless function (Netlify/Vercel function, Cloudflare
 * Worker, etc.) that holds the token server-side instead. The function
 * signatures below are written so that swap only touches this file.
 */
async function createEntry(contentType: string, fields: Record<string, unknown>) {
  if (!canWriteToContentful) return { ok: false, reason: 'not-configured' as const };

  const wrappedFields: Record<string, { 'en-US': unknown }> = {};
  for (const [key, value] of Object.entries(fields)) {
    wrappedFields[key] = { 'en-US': value };
  }

  try {
    const res = await fetch(
      `${CMA_BASE}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}/entries`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${MANAGEMENT_TOKEN}`,
          'Content-Type': 'application/vnd.contentful.management.v1+json',
          'X-Contentful-Content-Type': contentType,
        },
        body: JSON.stringify({ fields: wrappedFields }),
      },
    );
    if (!res.ok) {
      const body = await res.text();
      console.error('[contentful] create entry failed', res.status, body);
      return { ok: false, reason: 'request-failed' as const };
    }
    const entry = await res.json();
    // Publish immediately so the record shows up as live content, not just a draft.
    if (entry?.sys?.id && entry?.sys?.version) {
      await fetch(
        `${CMA_BASE}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}/entries/${entry.sys.id}/published`,
        {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${MANAGEMENT_TOKEN}`,
            'X-Contentful-Version': String(entry.sys.version),
          },
        },
      );
    }
    return { ok: true as const, entry };
  } catch (err) {
    console.error('[contentful] create entry error', err);
    return { ok: false, reason: 'network-error' as const };
  }
}

const LOCAL_KEY_ENROLLMENTS = 'skytrackict:enrollments';
const LOCAL_KEY_MESSAGES = 'skytrackict:contact-messages';

function saveLocal<T>(key: string, record: T) {
  try {
    const existing = JSON.parse(localStorage.getItem(key) || '[]') as T[];
    existing.push(record);
    localStorage.setItem(key, JSON.stringify(existing));
  } catch (err) {
    console.warn('Could not persist submission locally', err);
  }
}

export async function recordEnrollment(record: EnrollmentRecord) {
  saveLocal(LOCAL_KEY_ENROLLMENTS, record);
  if (canWriteToContentful) {
    await createEntry('enrollment', { ...record });
  }
}

export async function recordContactMessage(record: ContactMessageRecord) {
  saveLocal(LOCAL_KEY_MESSAGES, record);
  if (canWriteToContentful) {
    await createEntry('contactMessage', { ...record });
  }
}
