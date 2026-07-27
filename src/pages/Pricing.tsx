import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { CtaSection } from '../components/CtaSection';
import { Button } from '../components/Button';
import { WorkspacePlanRow, BusinessServiceRow, TestingServiceRow } from '../components/PricingRows';
import { COURSES, WORKSPACE_PLANS, BUSINESS_SERVICES, TESTING_SERVICES } from '../data/content';
import { EnrollButton } from '../components/EnrollButton';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export default function Pricing() {
  const examCourses = COURSES.filter((c) => c.category === 'exam-prep');
  const ictCourses = COURSES.filter((c) => c.category === 'ict-skills');
  const coworking = WORKSPACE_PLANS.filter((p) => p.group === 'coworking');
  const offices = WORKSPACE_PLANS.filter((p) => p.group === 'private-office');
  const conference = WORKSPACE_PLANS.filter((p) => p.group === 'conference');

  return (
    <>
      <Seo
        title="Price List"
        description="Affordable, flexible and transparent pricing for testing, training, coworking, conference rooms and business solutions at SkyTrack ICT."
        path="/pricing"
      />
      <PageHeader
        eyebrow="Price List"
        title="Affordable · Flexible · Transparent"
        description="Premium services at flexible rates designed to support students, professionals, startups and corporate clients."
      />

      <section className="py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Training programme fees" title="International exam preparation" />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {examCourses.map((c) => (
              <div key={c.id} className="flex items-center justify-between gap-3 p-4 rounded-xl border border-line bg-white">
                <span className="text-sm font-semibold text-ink">{c.name}</span>
                <span className="text-sm font-bold text-ink whitespace-nowrap">
                  {naira(c.priceMin)}–{naira(c.priceMax)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="ICT & digital skills" title="ICT training fees" />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ictCourses.map((c) => (
              <div key={c.id} className="flex items-center justify-between gap-3 p-4 rounded-xl border border-line bg-white">
                <span className="text-sm font-semibold text-ink">{c.name}</span>
                <span className="text-sm font-bold text-ink whitespace-nowrap">
                  {naira(c.priceMin)}–{naira(c.priceMax)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Workspace" title="Co-working space prices" />
          <div className="mt-8 space-y-3 max-w-2xl">
            {coworking.map((p) => (
              <WorkspacePlanRow key={p.id} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="Workspace" title="Private office prices" />
          <div className="mt-8 space-y-3 max-w-2xl">
            {offices.map((p) => (
              <WorkspacePlanRow key={p.id} plan={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Events" title="Conference & meeting rooms" />
          <div className="mt-8 space-y-3 max-w-2xl">
            {conference.map((p) => (
              <WorkspacePlanRow key={p.id} plan={p} />
            ))}
          </div>
          <p className="mt-4 text-xs text-slate">Extras: Projector ₦5,000 · Sound system ₦5,000.</p>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="Business solutions" title="Registration, branding & marketing fees" />
          <div className="mt-8 space-y-3 max-w-3xl">
            {BUSINESS_SERVICES.map((s) => (
              <BusinessServiceRow key={s.id} service={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Testing centre" title="Facility usage for exam bodies & partners" />
          <div className="mt-8 space-y-3 max-w-2xl">
            {TESTING_SERVICES.map((s) => (
              <TestingServiceRow key={s.id} service={s} />
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl border border-line max-w-2xl">
            <p className="font-bold text-ink">Background checks & recruitment</p>
            <p className="mt-1.5 text-sm text-slate">
              Priced per candidate or per role based on scope — request a quote and we'll confirm pricing before you
              pay.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <EnrollButton
                item={{ id: 'bg-check-standard', kind: 'business-service', name: 'Background Check Package', amount: 25000, description: 'Per candidate' }}
                label="Background Check — from ₦25,000"
                size="sm"
                variant="ghost"
              />
              <EnrollButton
                item={{ id: 'recruitment-single-role', kind: 'business-service', name: 'Single-Role Recruitment Package', amount: 75000, description: 'Per role' }}
                label="Recruitment — from ₦75,000"
                size="sm"
                variant="ghost"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ink text-white text-center">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold">Need custom or corporate pricing?</h2>
          <p className="mt-3 text-white/65 max-w-lg mx-auto">
            We offer discounts for long-term workspace bookings, bulk training registrations, corporate training
            packages, exam bodies and partners, and multi-division usage.
          </p>
          <Button to="/contact" size="lg" className="mt-7">
            Contact Us for Custom Pricing
          </Button>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
