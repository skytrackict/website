import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { Icon } from '../components/Icon';
import { CtaSection } from '../components/CtaSection';
import { BACKGROUND_CHECKS } from '../data/content';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export default function BackgroundChecks() {
  return (
    <>
      <Seo
        title="Background Checks"
        description="Academic verification, NYSC validation, employment history, address and guarantor checks for employers and institutions across Nigeria."
        path="/background-checks"
      />
      <PageHeader
        eyebrow="Background Checks"
        title="Verify with confidence"
        description="Comprehensive background checks for employers and institutions who need to hire and admit with confidence."
      />

      <section className="py-14 sm:py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="What we verify" title="Our checks" description="View each check for full details, turnaround times and pricing." />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {BACKGROUND_CHECKS.map((c) => (
              <Link
                key={c.id}
                to={`/background-checks/${c.id}`}
                className="flex flex-col sm:flex-row gap-4 p-6 rounded-2xl border border-line bg-white hover:shadow-card-hover transition-shadow"
              >
                <span className="w-11 h-11 rounded-xl bg-signal/10 text-signal flex items-center justify-center shrink-0">
                  <Icon name={c.icon as import('../components/Icon').IconName} size={20} />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-bold text-ink">{c.name}</h3>
                  <p className="mt-1.5 text-sm text-slate leading-relaxed">{c.summary}</p>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold text-signal">
                      From {naira(Math.min(...c.packages.map((p) => p.price)))}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink">
                      View prices
                      <Icon name="arrow-right" size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
