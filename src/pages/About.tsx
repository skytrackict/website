import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { Icon } from '../components/Icon';
import { CtaSection } from '../components/CtaSection';
import { StoryIllustration } from '../components/StoryIllustration';
import { MissionIllustration } from '../components/MissionIllustration';
import { TEAM } from '../data/content';

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about SkyTrack ICT's story, mission and management team — Nigeria's centre for testing, training and technology solutions."
        path="/about"
      />
      <PageHeader
        eyebrow="About SkyTrack ICT"
        title="A single, dependable centre for testing, skills and business growth"
        description="We started as a computer-based testing provider and grew into a full centre for training, software, workspace and business support — built on the same standard of accuracy in everything we do."
      />

      <section className="py-20 md:py-24">
        <div className="container-page grid lg:grid-cols-2 gap-14">
          <div>
            <SectionHeading eyebrow="Our story" title="From a testing centre to a full innovation hub" />
            <div className="mt-6">
              <StoryIllustration />
            </div>
            <p className="mt-6 text-slate leading-relaxed">
              SkyTrack ICT began by delivering secure, AI-assisted computer-based testing for academic
              institutions, professional bodies and corporate organisations across Nigeria — hosting
              international certification exams, school entrance exams and skills assessments in a
              controlled, accurate environment.
            </p>
            <p className="mt-4 text-slate leading-relaxed">
              As candidates and businesses came to us for more, we expanded deliberately: exam-prep and
              ICT training for the people sitting our tests, custom software for the institutions running
              them, and — most recently — coworking space, conference rooms and business solutions for
              founders and teams who needed somewhere reliable to build.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Our mission" title="Make testing, training and technology dependable" />
            <div className="mt-6">
              <MissionIllustration />
            </div>
            <p className="mt-6 text-slate leading-relaxed">
              Our mission is to remove uncertainty from the moments that matter — a certification exam, a
              new hire's background check, a founder's first registered business, a team's first proper
              office. We do this by combining trained people, secure processes and software we build
              ourselves.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { icon: 'shield-check' as const, label: 'Accuracy first' },
                { icon: 'users' as const, label: 'People-centred' },
                { icon: 'radar' as const, label: 'Fully trackable' },
                { icon: 'award' as const, label: 'Standards-driven' },
              ].map((v) => (
                <div key={v.label} className="flex items-center gap-3 p-3.5 rounded-xl bg-mist">
                  <span className="w-9 h-9 rounded-lg bg-white text-signal flex items-center justify-center shrink-0">
                    <Icon name={v.icon} size={16} />
                  </span>
                  <span className="text-sm font-medium text-ink">{v.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-mist">
        <div className="container-page">
          <SectionHeading eyebrow="Management team" title="The people behind SkyTrack ICT" align="center" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM.map((m) => (
              <div key={m.id} className="p-6 rounded-2xl bg-white border border-line text-center">
                <span className="w-16 h-16 mx-auto rounded-full bg-ink text-white font-display font-bold text-lg flex items-center justify-center">
                  {m.initials}
                </span>
                <h3 className="mt-4 font-bold text-ink">{m.name}</h3>
                <p className="text-sm text-signal font-medium mt-0.5">{m.role}</p>
                <p className="mt-3 text-sm text-slate leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
