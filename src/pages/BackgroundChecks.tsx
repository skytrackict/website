import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { Icon } from '../components/Icon';
import { CtaSection } from '../components/CtaSection';
import { EnrollButton } from '../components/EnrollButton';

const checks = [
  { icon: 'award' as const, title: 'Academic verification', body: 'Confirm degrees, transcripts and certificates, including international credentials.' },
  { icon: 'shield-check' as const, title: 'NYSC validation', body: 'Verify NYSC discharge or exemption certificates directly with the scheme.' },
  { icon: 'briefcase' as const, title: 'Employment history', body: 'Confirm past roles, dates of employment and reasons for leaving with former employers.' },
  { icon: 'map-pin' as const, title: 'Address verification', body: 'Physical confirmation of a candidate\u2019s stated residential or business address.' },
  { icon: 'users' as const, title: 'Guarantor checks', body: 'Verify guarantor identity, address and willingness to stand for the candidate.' },
];

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

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="What we verify" title="Our checks" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {checks.map((c) => (
              <div key={c.title} className="flex gap-4 p-6 rounded-2xl border border-line bg-white">
                <span className="w-11 h-11 rounded-xl bg-signal/10 text-signal flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-slate leading-relaxed">{c.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-mist flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-2xl">
            <div>
              <p className="font-bold text-ink">Standard background check package</p>
              <p className="text-sm text-slate mt-1">Covers one candidate across the checks selected at intake.</p>
            </div>
            <EnrollButton
              item={{ id: 'bg-check-standard', kind: 'business-service', name: 'Background Check Package', amount: 25000, description: 'Per candidate, scope confirmed at intake' }}
              label="Request a Check"
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
