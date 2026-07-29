import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { CtaSection } from '../components/CtaSection';
import { EXAM_TO_COURSE_ID, FACILITY_RENTAL } from '../data/content';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

const exams = [
  { name: 'IELTS', desc: 'International English Language Testing System' },
  { name: 'PTE Academic', desc: 'Pearson Test of English' },
  { name: 'CELPIP', desc: 'Canadian English Language Proficiency Index Program' },
  { name: 'SAT', desc: 'Scholastic Assessment Test' },
  { name: 'TOEFL iBT', desc: 'Test of English as a Foreign Language' },
  { name: 'GRE', desc: 'Graduate Record Examinations' },
  { name: 'GMAT', desc: 'Graduate Management Admission Test' },
];

const process = [
  { step: '01', title: 'Enrol in a class', body: 'Choose a package on the exam\u2019s training page and pay securely online.' },
  { step: '02', title: 'Attend classes & mocks', body: 'Learn with an instructor and sit timed mock exams to track your progress.' },
  { step: '03', title: 'Register for your exam', body: 'Book your official exam date directly on the certification body\u2019s platform.' },
  { step: '04', title: 'Sit your exam', body: 'Write your exam at an accredited testing centre on your scheduled date.' },
];

export default function TestingCentre() {
  const minFacilityPrice = Math.min(...FACILITY_RENTAL.packages.map((p) => p.price));

  return (
    <>
      <Seo
        title="Testing Centre"
        description="SkyTrack ICT provides training for IELTS, PTE, CELPIP, SAT, TOEFL, GRE and GMAT, plus school entrance and corporate assessments, delivered through accredited testing centres."
        path="/testing-centre"
      />
      <PageHeader
        eyebrow="Testing & Certification Centre"
        title="Expert training for international certification exams"
        description="We prepare you for these exams through structured classes and mock tests. Registration and sitting the exam itself happens through each certification body's official platform, at an accredited testing centre."
      />

      <section className="py-14 sm:py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Exams we prepare you for" title="International certification exams" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exams.map((e) => {
              const courseId = EXAM_TO_COURSE_ID[e.name];
              return (
                <Link
                  key={e.name}
                  to={`/training/${courseId}`}
                  className="flex items-center justify-between gap-3 p-5 rounded-xl border border-line bg-white hover:shadow-card transition-shadow"
                >
                  <div className="min-w-0">
                    <p className="font-bold text-ink">{e.name}</p>
                    <p className="text-xs text-slate mt-0.5">{e.desc}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full border border-line text-ink">
                    View Class
                    <Icon name="arrow-right" size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-slate max-w-2xl flex items-start gap-2">
            <Icon name="shield-check" size={15} className="mt-0.5 shrink-0 text-signal" />
            SkyTrack ICT provides classes and mock exams to prepare you for each of these tests. We don't register
            you for the exam itself — you book your official exam date directly with the certification body, and
            sit it at an accredited testing centre (which may or may not be SkyTrack ICT, depending on your
            location).
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="From class enrolment to exam day" />
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

      <section className="py-14 sm:py-20 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="For exam bodies & partners"
            title="Rent our testing centre"
            description="Host your own exam sessions in our secure facility, with full technical and administrative support."
          />
          <div className="mt-10 max-w-2xl p-6 rounded-2xl border border-line bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <div>
              <p className="font-bold text-ink">Half-day, full-day & multi-day packages</p>
              <p className="text-sm text-slate mt-1.5">
                CBT workstations, biometric check-in, backup power &amp; internet, and full candidate coordination
                included.
              </p>
              <p className="mt-2 font-display font-bold text-ink">From {naira(minFacilityPrice)}</p>
            </div>
            <Button to="/testing-centre/rent-facility">View Packages</Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
