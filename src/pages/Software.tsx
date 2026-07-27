import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { Icon } from '../components/Icon';
import { CtaSection } from '../components/CtaSection';
import { Button } from '../components/Button';

const capabilities = [
  { icon: 'monitor' as const, title: 'Web platforms', body: 'Student portals, booking systems, dashboards and internal tools built with modern, maintainable stacks.' },
  { icon: 'code' as const, title: 'CBT & assessment engines', body: 'Purpose-built computer-based testing software with secure delivery, timing and result reporting.' },
  { icon: 'building' as const, title: 'Systems integration', body: 'Connect payments, SMS, email and third-party APIs into a single, reliable workflow.' },
  { icon: 'shield-check' as const, title: 'Maintenance & support', body: 'Ongoing monitoring, bug fixes and feature updates after launch, not just a one-off handover.' },
];

const process = [
  { step: '01', title: 'Discovery', body: 'We scope the problem, users and constraints before writing a line of code.' },
  { step: '02', title: 'Design & build', body: 'Iterative development with regular check-ins, not a single big reveal at the end.' },
  { step: '03', title: 'Test & launch', body: 'QA against real scenarios, then a staged, low-risk rollout.' },
  { step: '04', title: 'Support', body: 'Monitoring and a maintenance plan so the system keeps working after launch.' },
];

export default function Software() {
  return (
    <>
      <Seo
        title="Software & Product Engineering"
        description="Custom web platforms, CBT and assessment engines, and systems integration built and maintained by SkyTrack ICT's engineering team."
        path="/software"
      />
      <PageHeader
        eyebrow="Software & Product Engineering"
        title="Custom-built systems for growing organisations"
        description="We design, build and maintain web platforms, mobile apps and internal business systems — engineered for reliability at scale."
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="What we build" title="Capabilities" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {capabilities.map((c) => (
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
        </div>
      </section>

      <section className="py-20 md:py-24 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="How we work" title="A predictable process, from discovery to support" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="p-6 rounded-2xl bg-white border border-line">
                <span className="font-display text-2xl font-bold text-signal/40">{p.step}</span>
                <h3 className="mt-3 font-bold text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page rounded-3xl bg-ink text-white p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold max-w-md">Have a project in mind?</h2>
            <p className="mt-3 text-white/65 max-w-md">
              Software projects are scoped individually — tell us what you're building and we'll send a tailored
              quote.
            </p>
          </div>
          <Button href={`mailto:info@skytrackict.com.ng?subject=${encodeURIComponent('Software project enquiry')}`} size="lg">
            Request a Quote
          </Button>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
