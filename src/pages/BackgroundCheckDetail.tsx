import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { EnrollButton } from '../components/EnrollButton';
import { SectionHeading } from '../components/Section';
import { CtaSection } from '../components/CtaSection';
import { BACKGROUND_CHECKS } from '../data/content';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export default function BackgroundCheckDetail() {
  const { checkId } = useParams();
  const check = BACKGROUND_CHECKS.find((c) => c.id === checkId);
  const [selectedId, setSelectedId] = useState(
    check?.packages.find((p) => p.recommended)?.id ?? check?.packages[0]?.id,
  );

  if (!check) return <Navigate to="/background-checks" replace />;

  const selected = check.packages.find((p) => p.id === selectedId) ?? check.packages[0];
  const related = BACKGROUND_CHECKS.filter((c) => c.id !== check.id).slice(0, 3);

  return (
    <>
      <Seo title={check.name} description={check.summary} path={`/background-checks/${check.id}`} />

      <section className="bg-ink text-white">
        <div className="container-page py-10 sm:py-14 md:py-18">
          <Link to="/background-checks" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white">
            <Icon name="arrow-right" size={14} className="rotate-180" />
            Back to Background Checks
          </Link>

          <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide bg-signal/20 text-signal-light px-3 py-1 rounded-full">
            Background Checks
          </span>

          <h1 className="mt-4 text-[1.7rem] sm:text-[2rem] md:text-[2.7rem] font-bold leading-[1.18] sm:leading-[1.1] max-w-2xl">
            {check.name}
          </h1>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">{check.longDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#packages" size="lg">
              View Prices &amp; Request
            </Button>
            <Button to="/contact" size="lg" variant="outline-light">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <SectionHeading eyebrow="What we check" title="What's covered" />
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {check.whatWeCheck.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-sm text-ink/80 p-3.5 rounded-xl bg-mist">
                  <Icon name="check" size={15} className="mt-0.5 shrink-0 text-success" />
                  {w}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-3 p-5 rounded-xl border border-line max-w-xl">
              <Icon name="clock" size={18} className="text-signal shrink-0" />
              <p className="text-sm text-ink/80">Typical turnaround: {check.turnaround}.</p>
            </div>
          </div>

          {/* Sticky packages sidebar */}
          <div id="packages" className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl border border-line bg-white shadow-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-signal">Choose an option</p>
              <p className="mt-1.5 text-sm text-slate">
                Select the option that fits your need — you'll pay securely with Paystack.
              </p>

              <div className="mt-5 space-y-3">
                {check.packages.map((pkg) => {
                  const isSelected = selectedId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedId(pkg.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-colors relative ${
                        isSelected ? 'border-signal bg-signal/5' : 'border-line hover:border-signal/40'
                      }`}
                    >
                      {pkg.recommended && (
                        <span className="absolute -top-2.5 right-4 text-[0.6rem] font-bold uppercase tracking-wide bg-amber text-ink px-2 py-0.5 rounded-full">
                          Most popular
                        </span>
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-bold text-ink text-sm">{pkg.name}</p>
                          <p className="text-xs text-slate mt-1">{pkg.bestFor}</p>
                        </div>
                        <span
                          className={`w-5 h-5 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center ${
                            isSelected ? 'border-signal bg-signal' : 'border-line'
                          }`}
                        >
                          {isSelected && <Icon name="check" size={11} className="text-white" />}
                        </span>
                      </div>
                      <p className="mt-3 font-display text-xl font-bold text-ink">{naira(pkg.price)}</p>
                      <ul className="mt-3 space-y-1.5">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-ink/70">
                            <Icon name="check" size={12} className="mt-0.5 shrink-0 text-success" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6">
                {selected && (
                  <EnrollButton
                    item={{
                      id: `${check.id}-${selected.id}`,
                      kind: 'business-service',
                      name: `${check.name} — ${selected.name}`,
                      amount: selected.price,
                      description: check.summary,
                    }}
                    label={`Request — ${naira(selected.price)}`}
                    className="w-full justify-center"
                  />
                )}
                <p className="mt-3 text-xs text-slate text-center flex items-center justify-center gap-1.5">
                  <Icon name="lock" size={12} />
                  Secured by Paystack
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-14 sm:py-20 md:py-24 bg-mist">
          <div className="container-page">
            <SectionHeading eyebrow="Related" title="Other checks you might need" />
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {related.map((c) => (
                <Link
                  key={c.id}
                  to={`/background-checks/${c.id}`}
                  className="p-5 rounded-2xl border border-line bg-white hover:shadow-card-hover transition-shadow"
                >
                  <p className="font-bold text-ink">{c.name}</p>
                  <p className="mt-1.5 text-sm text-slate leading-relaxed">{c.summary}</p>
                  <p className="mt-3 text-sm font-semibold text-signal">
                    From {naira(Math.min(...c.packages.map((p) => p.price)))}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
