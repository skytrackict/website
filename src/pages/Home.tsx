import { Seo } from '../components/Seo';
import { Button } from '../components/Button';
import { RadarHero } from '../components/RadarHero';
import { ServiceCard } from '../components/ServiceCard';
import { SectionHeading, StatBlock } from '../components/Section';
import { Testimonials } from '../components/Testimonials';
import { CtaSection } from '../components/CtaSection';
import { Icon } from '../components/Icon';
import { DIVISIONS, SPECIALIST_SERVICES } from '../data/content';

const stats = [
  { value: '7', label: 'Certification exams administered' },
  { value: '5', label: 'Divisions under one roof' },
  { value: '100%', label: 'Paystack-secured payments' },
  { value: '6', label: 'Days a week open for business' },
];

const whyChoose = [
  {
    icon: 'shield-check' as const,
    title: 'Verified & secure',
    body: 'Biometric check-ins, invigilated testing, and PCI-DSS compliant payments through Paystack on every booking.',
  },
  {
    icon: 'radar' as const,
    title: 'Built to track',
    body: 'From exam bookings to workspace reservations, every transaction is logged and confirmed instantly.',
  },
  {
    icon: 'users' as const,
    title: 'Experienced team',
    body: 'Instructors, testing administrators and engineers with real track records across testing, training and software.',
  },
  {
    icon: 'clock' as const,
    title: 'Always accessible',
    body: 'Book online any time — desks, exams, courses and business services, without waiting on office hours.',
  },
];

export default function Home() {
  return (
    <>
      <Seo
        title="SkyTrack ICT | Certification Testing, ICT Training, Workspace & Business Solutions"
        description="Nigeria's trusted centre for international certification exams, ICT & professional training, coworking spaces, business solutions, software, scholarships, background checks and recruitment."
        path="/"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="container-page relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center py-12 sm:py-12 sm:py-16 md:py-24">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-amber bg-amber/10 px-3 py-1.5 rounded-full">
              Testing · Training · Technology
            </span>
            <h1 className="mt-5 sm:mt-6 text-[1.95rem] sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.4rem] font-bold leading-[1.12] sm:leading-[1.06]">
              Verified, trackable solutions for exams, skills and business.
            </h1>
            <p className="mt-5 sm:mt-6 text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
              SkyTrack ICT brings certification testing, professional training, software engineering,
              coworking space and business support together — book any of it online in minutes.
            </p>
            <div className="mt-8 sm:mt-9 flex flex-wrap gap-3">
              <Button to="/enroll" size="lg">
                Enrol / Book Now
              </Button>
              <Button to="/testing-centre" size="lg" variant="outline-light">
                Book an Exam Slot
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-white">{s.value}</p>
                  <p className="mt-1 text-xs text-white/55 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up" style={{ animationDelay: '0.15s' }}>
            <RadarHero />
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we offer"
            title="Five divisions, one dependable centre"
            description="Every division is bookable and payable online — no back-and-forth, no paperwork before you can get started."
          />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIVISIONS.map((d, i) => (
              <ServiceCard key={d.slug} division={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Specialist services */}
      <section className="py-14 sm:py-20 md:py-24 bg-mist">
        <div className="container-page">
          <SectionHeading
            eyebrow="Specialist services"
            title="Support beyond the classroom and the desk"
            description="Background verification, recruitment and scholarship support for individuals, employers and institutions."
          />
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {SPECIALIST_SERVICES.map((d, i) => (
              <ServiceCard key={d.slug} division={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Why SkyTrack ICT" title="Built for accuracy, from booking to delivery" align="center" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((w) => (
              <div key={w.title} className="text-center px-2">
                <span className="w-12 h-12 mx-auto rounded-2xl bg-ink text-white flex items-center justify-center">
                  <Icon name={w.icon} size={20} />
                </span>
                <h3 className="mt-4 font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-sm text-slate leading-relaxed">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="py-16 border-y border-line bg-mist">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBlock value="CBT" label="Computer-based testing centre" />
          <StatBlock value="7+" label="International exams supported" />
          <StatBlock value="₦2k" label="Starting daily desk rate" />
          <StatBlock value="24/7" label="Online booking availability" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="container-page">
          <SectionHeading eyebrow="Trusted by candidates & clients" title="What people say about working with us" />
          <div className="mt-12">
            <Testimonials />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
