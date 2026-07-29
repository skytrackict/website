import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { EnrollButton } from '../components/EnrollButton';
import { SectionHeading } from '../components/Section';
import { CtaSection } from '../components/CtaSection';
import { PRIVATE_OFFICE_RENTAL } from '../data/content';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export default function PrivateOfficeDetail() {
  const [selectedId, setSelectedId] = useState(
    PRIVATE_OFFICE_RENTAL.packages.find((p) => p.recommended)?.id ?? PRIVATE_OFFICE_RENTAL.packages[0].id,
  );
  const selected = PRIVATE_OFFICE_RENTAL.packages.find((p) => p.id === selectedId) ?? PRIVATE_OFFICE_RENTAL.packages[0];

  return (
    <>
      <Seo
        title="Private Offices"
        description="Dedicated, lockable private office space at SkyTrack ICT for teams of 1–6 — daily, and monthly plans available."
        path="/workspace/private-offices"
      />

      <section className="bg-ink text-white">
        <div className="container-page py-10 sm:py-14 md:py-18">
          <Link to="/workspace" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white">
            <Icon name="arrow-right" size={14} className="rotate-180" />
            Back to Workspace
          </Link>

          <span className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide bg-signal/20 text-signal-light px-3 py-1 rounded-full">
            Workspace
          </span>

          <h1 className="mt-4 text-[1.7rem] sm:text-[2rem] md:text-[2.7rem] font-bold leading-[1.18] sm:leading-[1.1] max-w-2xl">{PRIVATE_OFFICE_RENTAL.title}</h1>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">{PRIVATE_OFFICE_RENTAL.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#packages" size="lg">
              View Prices &amp; Book
            </Button>
            <Button to="/contact" size="lg" variant="outline-light">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            <SectionHeading eyebrow="Included with every office" title="What you get" />
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {PRIVATE_OFFICE_RENTAL.benefits.map((b) => (
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

            <div className="mt-10 flex items-center gap-3 p-5 rounded-xl bg-mist max-w-xl">
              <Icon name="users" size={20} className="text-signal shrink-0" />
              <p className="text-sm text-ink/80">
                Growing team? You can move between office sizes at any time — just give us a few days' notice.
              </p>
            </div>
          </div>

          {/* Sticky packages sidebar */}
          <div id="packages" className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl border border-line bg-white shadow-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-signal">Choose your office</p>
              <p className="mt-1.5 text-sm text-slate">Pick the size that fits your team — pay securely with Paystack.</p>

              <div className="mt-5 space-y-3">
                {PRIVATE_OFFICE_RENTAL.packages.map((pkg) => {
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
                      <p className="mt-3 font-display text-xl font-bold text-ink">{pkg.priceLabel ?? naira(pkg.price)}</p>
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
                    id: `private-office-${selected.id}`,
                    kind: 'workspace',
                    name: `${selected.name} — Private Office`,
                    amount: selected.price,
                    description: selected.bestFor,
                  }}
                  label={`Book — ${naira(selected.price)}`}
                  className="w-full justify-center"
                />
                <p className="mt-3 text-xs text-slate text-center leading-relaxed">
                  This secures your booking at the rate shown; our team will confirm availability and move-in
                  details shortly after payment.
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
