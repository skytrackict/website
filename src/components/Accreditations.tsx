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
    body: 'Accredited PeopleCert examination centre for globally recognised certifications.',
  },
  {
    name: 'Pearson VUE',
    logo: pearsonLogo,
    body: 'Approved Pearson VUE test centre for computer-based professional and certification exams.',
  },
];

/** Compact logo strip, e.g. under the home page hero. */
export function AccreditationStrip({ className }: { className?: string }) {
  return (
    <section className={clsx('py-10 border-b border-line', className)}>
      <div className="container-page flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate shrink-0 flex items-center gap-2">
          <Icon name="award" size={15} className="text-signal" />
          Accredited & approved by
        </p>
        <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
          {ACCREDITATIONS.map((a) => (
            <img key={a.name} src={a.logo} alt={`${a.name} logo`} className="h-9 sm:h-10 w-auto" loading="lazy" />
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
            eyebrow="Accredited test centre"
            title="Accredited by PeopleCert and approved by Pearson VUE"
            description="SkyTrack ICT is an officially accredited PeopleCert examination centre and an approved Pearson VUE test centre — so candidates can sit their exams with us in a secure, invigilated, computer-based environment."
          />
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {ACCREDITATIONS.map((a) => (
              <div key={a.name} className="p-5 rounded-2xl border border-line bg-white">
                <div className="h-12 flex items-center">
                  <img src={a.logo} alt={`${a.name} logo`} className="max-h-10 w-auto" loading="lazy" />
                </div>
                <p className="mt-4 text-sm text-slate leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
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
