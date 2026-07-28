import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { EnrollButton } from '../components/EnrollButton';
import { Icon } from '../components/Icon';
import {
  COURSES,
  WORKSPACE_PLANS,
  BUSINESS_SERVICES,
  TESTING_SERVICES,
} from '../data/content';
import type { Sellable } from '../types';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

interface Group {
  id: string;
  label: string;
  icon: import('../components/Icon').IconName;
  items: Sellable[];
}

export default function Enroll() {
  const [query, setQuery] = useState('');

  const groups: Group[] = useMemo(
    () => [
      {
        id: 'courses',
        label: 'Training & Exam Prep',
        icon: 'graduation',
        items: COURSES.map((c) => ({
          id: c.id,
          kind: 'course',
          name: c.name,
          amount: Math.min(...c.packages.map((p) => p.price)),
          description: `${c.packages.length} packages · ${c.duration}`,
        })),
      },
      {
        id: 'workspace',
        label: 'Workspace & Conference',
        icon: 'building',
        items: WORKSPACE_PLANS.map((p) => ({
          id: p.id,
          kind: 'workspace',
          name: p.name,
          amount: parseInt(p.price.replace(/[^\d]/g, '')) || 5000,
          description: p.period,
        })),
      },
      {
        id: 'business',
        label: 'Business Solutions',
        icon: 'briefcase',
        items: BUSINESS_SERVICES.map((s) => ({
          id: s.id,
          kind: 'business-service',
          name: s.name,
          amount: Math.round((s.priceMin + s.priceMax) / 2 / 500) * 500,
          description: s.summary,
        })),
      },
      {
        id: 'testing',
        label: 'Testing Centre',
        icon: 'radar',
        items: TESTING_SERVICES.map((s) => ({
          id: s.id,
          kind: 'testing-service',
          name: s.name,
          amount: Math.round((s.priceMin + s.priceMax) / 2 / 500) * 500,
          description: s.period,
        })),
      },
    ],
    [],
  );

  const filtered = groups
    .map((g) => ({
      ...g,
      items: g.items.filter((i) => i.name.toLowerCase().includes(query.toLowerCase())),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <Seo
        title="Enrol / Book Now"
        description="Browse every SkyTrack ICT service — training, testing, workspace and business solutions — and pay securely online with Paystack."
        path="/enroll"
      />
      <PageHeader
        eyebrow="Enrol / Book Now"
        title="Choose what you need and pay securely"
        description="Every course, desk, room and business service can be booked and paid for right here, in one flow."
      />

      <section className="py-14">
        <div className="container-page">
          <div className="relative max-w-md">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services — e.g. IELTS, desk, website…"
              className="w-full rounded-full border border-line px-5 py-3.5 text-sm focus:border-signal focus:ring-1 focus:ring-signal outline-none"
            />
          </div>
        </div>
      </section>

      {filtered.map((group) => (
        <section key={group.id} className="py-10">
          <div className="container-page">
            <SectionHeading
              eyebrow="Category"
              title={
                <span className="flex items-center gap-2.5">
                  <Icon name={group.icon} size={22} className="text-signal" />
                  {group.label}
                </span>
              }
            />
            <div className="mt-8 space-y-3 max-w-2xl">
              {group.items.map((item) =>
                group.id === 'courses' ? (
                  <Link
                    key={item.id}
                    to={`/training/${item.id}`}
                    className="flex items-center justify-between gap-4 p-5 rounded-xl border border-line bg-white hover:shadow-card transition-shadow"
                  >
                    <div>
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="text-sm text-slate mt-0.5">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-display font-bold text-signal whitespace-nowrap">From {naira(item.amount)}</span>
                      <Icon name="arrow-right" size={16} className="text-slate" />
                    </div>
                  </Link>
                ) : (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-4 p-5 rounded-xl border border-line bg-white"
                  >
                    <div>
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="text-sm text-slate mt-0.5">{item.description}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-display font-bold text-ink whitespace-nowrap">{naira(item.amount)}</span>
                      <EnrollButton item={item} label="Enrol" size="sm" />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="container-page py-16 text-center text-slate">
          No services match “{query}”. Try a different search term, or{' '}
          <a href="/contact" className="text-signal font-medium">
            contact us
          </a>{' '}
          directly.
        </div>
      )}
    </>
  );
}
