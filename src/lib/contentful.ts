import { createClient, type Entry, type EntrySkeletonType } from 'contentful';

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string | undefined;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string | undefined;
const ENVIRONMENT = (import.meta.env.VITE_CONTENTFUL_ENVIRONMENT as string | undefined) || 'master';

export const isContentfulConfigured = Boolean(SPACE_ID && ACCESS_TOKEN);

let client: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (!isContentfulConfigured) return null;
  if (!client) {
    client = createClient({
      space: SPACE_ID as string,
      accessToken: ACCESS_TOKEN as string,
      environment: ENVIRONMENT,
    });
  }
  return client;
}

/**
 * Fetch entries of a given Contentful content type.
 * Returns `null` when Contentful isn't configured or the request fails,
 * so callers can fall back to the bundled static content in `src/data/content.ts`.
 */
export async function fetchEntries<T extends EntrySkeletonType = EntrySkeletonType>(
  contentType: string,
  query: Record<string, unknown> = {},
): Promise<Entry<T>[] | null> {
  const c = getClient();
  if (!c) return null;
  try {
    const res = await c.getEntries<T>({ content_type: contentType, ...query } as any);
    return res.items;
  } catch (err) {
    console.warn(`[contentful] failed to fetch "${contentType}", using fallback data.`, err);
    return null;
  }
}

/**
 * Writes (enrolments, bookings, contact messages) require the Contentful
 * Content Management API, which needs a token with write access. See
 * src/lib/submissions.ts and the README for how this is wired up and the
 * security trade-offs of using a management token from the browser.
 */
export const CONTENTFUL_SPACE_ID = SPACE_ID;
export const CONTENTFUL_ENVIRONMENT = ENVIRONMENT;
