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
  FACILITY_RENTAL,
  PRIVATE_OFFICE_RENTAL,
} from '../data/content';
import type { Sellable } from '../types';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

interface Group {
  id: string;
  label: string;
  icon: import('../components/Icon').IconName;
  items: (Sellable & { href?: string })[];
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
          href: `/training/${c.id}`,
        })),
      },
      {
        id: 'workspace',
        label: 'Workspace & Conference',
        icon: 'building',
        items: [
          ...WORKSPACE_PLANS.map((p) => ({
            id: p.id,
            kind: 'workspace' as const,
            name: p.name,
            amount: parseInt((p.price.match(/[\d,]+/)?.[0] ?? '5000').replace(/,/g, ''), 10) || 5000,
            description: p.period,
          })),
          {
            id: 'private-offices',
            kind: 'workspace' as const,
            name: PRIVATE_OFFICE_RENTAL.title,
            amount: Math.min(...PRIVATE_OFFICE_RENTAL.packages.map((pkg) => pkg.price)),
            description: 'Small, medium & large offices for teams of 1–6',
            href: '/workspace/private-offices',
          },
        ],
      },
      {
        id: 'business',
        label: 'Business Solutions',
        icon: 'briefcase',
        items: BUSINESS_SERVICES.map((s) => ({
          id: s.id,
          kind: 'business-service',
          name: s.name,
          amount: Math.min(...s.packages.map((p) => p.price)),
          description: s.summary,
          href: `/business-solutions/${s.id}`,
        })),
      },
      {
        id: 'testing',
        label: 'Testing Centre — Facility Rental',
        icon: 'radar',
        items: [
          {
            id: 'facility-rental',
            kind: 'testing-service',
            name: FACILITY_RENTAL.title,
            amount: Math.min(...FACILITY_RENTAL.packages.map((p) => p.price)),
            description: 'Half-day, full-day & multi-day packages for exam bodies & partners',
            href: '/testing-centre/rent-facility',
          },
        ],
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
                item.href ? (
                  <Link
                    key={item.id}
                    to={item.href}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-line bg-white hover:shadow-card transition-shadow"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="text-sm text-slate mt-0.5">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
                      <span className="font-display font-bold text-signal whitespace-nowrap">From {naira(item.amount)}</span>
                      <Icon name="arrow-right" size={16} className="text-slate" />
                    </div>
                  </Link>
                ) : (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl border border-line bg-white"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="text-sm text-slate mt-0.5">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 shrink-0">
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
