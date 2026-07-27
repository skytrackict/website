import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { Icon } from '../components/Icon';
import { CtaSection } from '../components/CtaSection';
import { TestingServiceRow } from '../components/PricingRows';
import { EnrollButton } from '../components/EnrollButton';
import { TESTING_SERVICES } from '../data/content';

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
  { step: '01', title: 'Book your slot', body: 'Choose your exam and preferred date, then pay securely online.' },
  { step: '02', title: 'Verify on arrival', body: 'Check in with valid ID; our system confirms your booking and seat instantly.' },
  { step: '03', title: 'Sit the exam', body: 'Take your test in a monitored, distraction-free CBT environment.' },
  { step: '04', title: 'Get your results', body: 'Results are released per each exam body\u2019s official timeline.' },
];

export default function TestingCentre() {
  return (
    <>
      <Seo
        title="Testing Centre"
        description="SkyTrack ICT's accredited computer-based testing centre delivers IELTS, PTE, CELPIP, SAT, TOEFL, GRE and GMAT, plus school entrance and corporate assessments."
        path="/testing-centre"
      />
      <PageHeader
        eyebrow="Testing & Certification Centre"
        title="Secure, AI-assisted computer-based testing"
        description="Accredited CBT delivery for international certification exams, school entrance exams, promotional exams and corporate skills assessments — under monitored, tamper-proof conditions."
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Exams we administer" title="International certification exams" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {exams.map((e) => (
              <div key={e.name} className="flex items-center justify-between gap-3 p-5 rounded-xl border border-line bg-white">
                <div>
                  <p className="font-bold text-ink">{e.name}</p>
                  <p className="text-xs text-slate mt-0.5">{e.desc}</p>
                </div>
                <EnrollButton
                  item={{ id: `exam-${e.name.toLowerCase()}`, kind: 'testing-service', name: `${e.name} Exam Slot`, amount: 45000, description: e.desc }}
                  label="Book"
                  size="sm"
                  variant="ghost"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-slate">
            Exact fees are set by each certification body and confirmed at booking; the amount shown at checkout is
            an indicative slot-booking deposit.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="How it works" title="From booking to results, in four steps" />
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
        <div className="container-page">
          <SectionHeading
            eyebrow="For exam bodies & partners"
            title="Rent our testing centre"
            description="Host your own exam sessions in our secure facility, with full technical and administrative support."
          />
          <div className="mt-10 space-y-3 max-w-2xl">
            {TESTING_SERVICES.map((s) => (
              <TestingServiceRow key={s.id} service={s} />
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3 p-5 rounded-xl bg-signal/5 border border-signal/15 max-w-2xl">
            <Icon name="shield-check" size={20} className="text-signal shrink-0" />
            <p className="text-sm text-ink/80">
              Every session includes biometric candidate check-in, backup power and internet, and live invigilation.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
