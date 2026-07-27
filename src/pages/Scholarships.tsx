import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { CtaSection } from '../components/CtaSection';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';

const support = [
  { icon: 'award' as const, title: 'Scholarship discovery', body: 'We match students to local and international scholarship opportunities that fit their profile.' },
  { icon: 'graduation' as const, title: 'Application guidance', body: 'Support with essays, references and application requirements, end to end.' },
  { icon: 'radar' as const, title: 'Qualifying exam prep', body: 'Access to our IELTS, TOEFL, SAT, GRE and GMAT training for exams a scholarship requires.' },
  { icon: 'users' as const, title: 'Mentorship', body: 'Guidance from application through to enrolment, from people who\u2019ve supported students before.' },
];

export default function Scholarships() {
  return (
    <>
      <Seo
        title="Scholarships"
        description="SkyTrack ICT helps students discover, prepare for and apply to local and international scholarship opportunities."
        path="/scholarships"
      />
      <PageHeader
        eyebrow="Scholarships"
        title="Opening doors for deserving students"
        description="We identify, prepare and support promising students for local and international scholarship opportunities."
      />

      <section className="py-20 md:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="How we help" title="Support through the whole process" />
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {support.map((s) => (
              <div key={s.title} className="flex gap-4 p-6 rounded-2xl border border-line bg-white">
                <span className="w-11 h-11 rounded-xl bg-signal/10 text-signal flex items-center justify-center shrink-0">
                  <Icon name={s.icon} size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-ink text-white flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl">
            <div>
              <h3 className="text-xl font-bold">Applying for a scholarship?</h3>
              <p className="mt-2 text-white/65 text-sm max-w-sm">
                Tell us about the opportunity and your background, and we'll let you know how we can help.
              </p>
            </div>
            <Button href={`mailto:info@skytrackict.com.ng?subject=${encodeURIComponent('Scholarship support enquiry')}`}>
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
