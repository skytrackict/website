import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { CtaSection } from '../components/CtaSection';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { WorkspacePlanRow, BusinessServiceRow } from '../components/PricingRows';
import { COURSES, WORKSPACE_PLANS, BUSINESS_SERVICES, FACILITY_RENTAL } from '../data/content';
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
          <SectionHeading eyebrow="Training programme fees" title="International exam preparation" description="Each programme has 3 packages — view a course for full package details and to enrol." />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {examCourses.map((c) => (
              <Link
                key={c.id}
                to={`/training/${c.id}`}
                className="flex items-center justify-between gap-3 p-4 rounded-xl border border-line bg-white hover:shadow-card transition-shadow"
              >
                <span className="text-sm font-semibold text-ink">{c.name}</span>
                <span className="text-sm font-bold text-signal whitespace-nowrap">
                  From {naira(Math.min(...c.packages.map((p) => p.price)))}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="ICT & digital skills" title="ICT training fees" description="Each course has 3 packages — view a course for full package details and to enrol." />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ictCourses.map((c) => (
              <Link
                key={c.id}
                to={`/training/${c.id}`}
                className="flex items-center justify-between gap-3 p-4 rounded-xl border border-line bg-white hover:shadow-card transition-shadow"
              >
                <span className="text-sm font-semibold text-ink">{c.name}</span>
                <span className="text-sm font-bold text-signal whitespace-nowrap">
                  From {naira(Math.min(...c.packages.map((p) => p.price)))}
                </span>
              </Link>
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
          <div className="mt-8 max-w-2xl p-6 rounded-2xl border border-line bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="font-bold text-ink">Half-day, full-day & multi-day packages</p>
              <p className="text-sm text-slate mt-1.5">Rent our secure CBT facility to host your own exam sessions.</p>
              <p className="mt-2 font-display font-bold text-ink">
                From {naira(Math.min(...FACILITY_RENTAL.packages.map((p) => p.price)))}
              </p>
            </div>
            <Button to="/testing-centre/rent-facility">View Packages</Button>
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
