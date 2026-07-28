import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { EnrollButton } from '../components/EnrollButton';
import { SectionHeading } from '../components/Section';
import { CtaSection } from '../components/CtaSection';
import { FACILITY_RENTAL } from '../data/content';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export default function FacilityRentalDetail() {
  const [selectedId, setSelectedId] = useState(
    FACILITY_RENTAL.packages.find((p) => p.recommended)?.id ?? FACILITY_RENTAL.packages[0].id,
  );
  const selected = FACILITY_RENTAL.packages.find((p) => p.id === selectedId) ?? FACILITY_RENTAL.packages[0];

  return (
    <>
      <Seo
        title="Rent Our Testing Centre"
        description="Host your own exam sessions in SkyTrack ICT's secure, accredited testing facility — half-day, full-day and multi-day packages available."
        path="/testing-centre/rent-facility"
      />

      <section className="bg-ink text-white">
        <div className="container-page py-14 md:py-18">
          <Link to="/testing-centre" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white">
            <Icon name="arrow-right" size={14} className="rotate-180" />
            Back to Testing Centre
          </Link>

          <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide bg-signal/20 text-signal-light px-3 py-1 rounded-full">
            For Exam Bodies &amp; Partners
          </span>

          <h1 className="mt-4 text-[2rem] md:text-[2.7rem] font-bold leading-[1.1] max-w-2xl">{FACILITY_RENTAL.title}</h1>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">{FACILITY_RENTAL.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#packages" size="lg">
              View Packages &amp; Request
            </Button>
            <Button to="/contact" size="lg" variant="outline-light">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <SectionHeading eyebrow="Why partners choose us" title="What you get with every booking" />
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {FACILITY_RENTAL.benefits.map((b) => (
                <div key={b.title} className="flex gap-3.5 p-5 rounded-xl border border-line bg-white">
                  <span className="w-10 h-10 rounded-lg bg-signal/10 text-signal flex items-center justify-center shrink-0">
                    <Icon name={b.icon as import('../components/Icon').IconName} size={18} />
                  </span>
                  <div>
                    <p className="font-semibold text-ink text-sm">{b.title}</p>
                    <p className="text-sm text-slate mt-1 leading-relaxed">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 p-6 rounded-2xl bg-mist">
              <h3 className="font-bold text-ink">How booking works</h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {[
                  { step: '01', title: 'Tell us your needs', body: 'Share your exam type, candidate numbers and preferred date.' },
                  { step: '02', title: 'We confirm a package', body: 'We recommend a package and confirm final pricing for your session.' },
                  { step: '03', title: 'Pay to secure your date', body: 'Pay securely online to lock in your facility booking.' },
                  { step: '04', title: 'We handle the day', body: 'Our team manages check-in, seating and technical support on-site.' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-3">
                    <span className="font-display text-lg font-bold text-signal/50 shrink-0">{s.step}</span>
                    <div>
                      <p className="font-semibold text-ink text-sm">{s.title}</p>
                      <p className="text-xs text-slate mt-0.5 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky packages sidebar */}
          <div id="packages" className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl border border-line bg-white shadow-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-signal">Choose a package</p>
              <p className="mt-1.5 text-sm text-slate">
                Final pricing depends on exam type and candidate numbers — this secures your date and covers a standard session.
              </p>

              <div className="mt-5 space-y-3">
                {FACILITY_RENTAL.packages.map((pkg) => {
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
                      <p className="mt-3 font-display text-xl font-bold text-ink">From {naira(pkg.price)}</p>
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
                <EnrollButton
                  item={{
                    id: `facility-rental-${selected.id}`,
                    kind: 'testing-service',
                    name: `Facility Rental — ${selected.name}`,
                    amount: selected.price,
                    description: selected.bestFor,
                  }}
                  label={`Request — from ${naira(selected.price)}`}
                  className="w-full justify-center"
                />
                <p className="mt-3 text-xs text-slate text-center leading-relaxed">
                  This secures your date with a deposit; our team will follow up to confirm final pricing based on
                  your exact requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
