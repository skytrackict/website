import type { ReactNode } from 'react';
import { Seo } from './Seo';
import { PageHeader } from './Section';

export function LegalPage({
  title,
  path,
  description,
  children,
}: {
  title: string;
  path: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <Seo title={title} description={description} path={path} />
      <PageHeader eyebrow="Legal" title={title} description={description} />
      <section className="py-16">
        <div className="container-page max-w-3xl prose-legal">
          <div className="space-y-6 text-sm text-slate leading-relaxed [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-ink [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-2">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
