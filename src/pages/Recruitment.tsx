import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { CtaSection } from '../components/CtaSection';
import { EnrollButton } from '../components/EnrollButton';

const steps = [
  { step: '01', title: 'Role scoping', body: 'We work with you to define the role, required skills and ideal candidate profile.' },
  { step: '02', title: 'Sourcing & screening', body: 'Candidates are sourced and screened against your requirements.' },
  { step: '03', title: 'Skills assessment', body: 'Shortlisted candidates are tested through our own CBT centre where relevant.' },
  { step: '04', title: 'Verification & shortlist', body: 'Background and reference checks, then a final shortlist delivered to you.' },
];

export default function Recruitment() {
  return (
    <>
      <Seo
        title="Recruitment Services"
        description="End-to-end recruitment support for businesses, backed by SkyTrack ICT's testing centre and background-check pipeline."
        path="/recruitment"
      />
      <PageHeader
        eyebrow="Recruitment Services"
        title="Right talent, right role"
        description="End-to-end recruitment support — from role scoping to a verified shortlist — backed by our own testing centre and background-check pipeline."
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="Our recruitment process" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="p-6 rounded-2xl bg-white border border-line">
                <span className="font-display text-2xl font-bold text-signal/40">{s.step}</span>
                <h3 className="mt-3 font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-mist flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-2xl">
            <div>
              <p className="font-bold text-ink">Single-role recruitment package</p>
              <p className="text-sm text-slate mt-1">Sourcing, screening, assessment and shortlist for one open role.</p>
            </div>
            <EnrollButton
              item={{ id: 'recruitment-single-role', kind: 'business-service', name: 'Single-Role Recruitment Package', amount: 75000, description: 'Scope confirmed after role brief' }}
              label="Start a Search"
            />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
