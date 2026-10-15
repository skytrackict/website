import clsx from 'clsx';
import peoplecertLogo from '../assets/partners/peoplecert-logo.svg';
import pearsonLogo from '../assets/partners/pearson-logo.svg';
import cbtLab from '../assets/testing/cbt-lab.jpg';
import candidate from '../assets/testing/candidate.jpg';
import workstation from '../assets/testing/workstation.jpg';
import { SectionHeading } from './Section';
import { Icon } from './Icon';

// Pearson VUE rebranded as Pearson Professional Assessments in Nov 2025; the logo is the current official mark.
const ACCREDITATIONS = [
  {
    name: 'PeopleCert',
    logo: peoplecertLogo,
    title: 'PeopleCert Accredited Examination Centre',
    body: 'Globally recognised PeopleCert certification exams — such as ITIL®, PRINCE2® and LanguageCert — delivered on-site under strict invigilation.',
  },
  {
    name: 'Pearson VUE',
    logo: pearsonLogo,
    title: 'Pearson VUE Authorised Test Centre',
    body: 'Computer-based professional and certification exams delivered through the Pearson VUE network, on-site under full proctoring.',
  },
];

const HEADLINE = 'PeopleCert & Pearson Approved Test Centre';

/** Compact accreditation banner, e.g. under the home page hero. */
export function AccreditationStrip({ className }: { className?: string }) {
  return (
    <section className={clsx('py-8 sm:py-10 border-b border-line', className)}>
      <div className="container-page flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 shrink-0 rounded-xl bg-signal/10 text-signal flex items-center justify-center">
            <Icon name="award" size={18} />
          </span>
          <div>
            <p className="font-display font-bold text-ink leading-tight">{HEADLINE}</p>
            <p className="text-sm text-slate mt-0.5">Sit your certification exam with us, on-site.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
          {ACCREDITATIONS.map((a) => (
            <img key={a.name} src={a.logo} alt={`${a.name} logo`} className="h-8 sm:h-9 w-auto" loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Full accreditation section with logos and testing centre photos. */
export function AccreditationSection({ className }: { className?: string }) {
  return (
    <section className={clsx('py-14 sm:py-20 md:py-24', className)}>
      <div className="container-page grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div>
          <SectionHeading
            eyebrow="Accreditations"
            title={HEADLINE}
            description="SkyTrack ICT is accredited by PeopleCert and approved by Pearson VUE to deliver their international examinations — so you can sit your exam with us in a secure, invigilated, computer-based environment."
          />
          <ol className="mt-8 border-t border-line">
            {ACCREDITATIONS.map((a, i) => (
              <li key={a.name} className="py-6 border-b border-line">
                <span className="font-mono text-xs text-slate">{String(i + 1).padStart(2, '0')}</span>
                <img src={a.logo} alt={`${a.name} logo`} className="mt-3 h-9 w-auto" loading="lazy" />
                <h3 className="mt-4 font-bold text-ink">{a.title}</h3>
                <p className="mt-1.5 text-sm text-slate leading-relaxed">{a.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-xs text-slate/80">
            PeopleCert, ITIL® and PRINCE2® are trademarks of PeopleCert. Pearson VUE is a trademark of Pearson plc.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <img
            src={cbtLab}
            alt="Candidates sitting computer-based exams in a testing lab"
            className="col-span-2 w-full aspect-[16/9] object-cover rounded-2xl"
            loading="lazy"
          />
          <img
            src={candidate}
            alt="Candidate taking an exam at a workstation"
            className="w-full aspect-[4/3] object-cover rounded-2xl"
            loading="lazy"
          />
          <img
            src={workstation}
            alt="Candidates working at computer-based testing stations"
            className="w-full aspect-[4/3] object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
