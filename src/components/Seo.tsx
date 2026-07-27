import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = 'https://skytrackict.com.ng';
const BASE_TITLE = 'SkyTrack ICT';

function setMeta(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  useEffect(() => {
    const fullTitle = title === BASE_TITLE ? title : `${title} | ${BASE_TITLE}`;
    document.title = fullTitle;
    setMeta('description', description);
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `${SITE_URL}${path}`, 'property');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${SITE_URL}${path}`);

    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [title, description, path]);

  return null;
}
