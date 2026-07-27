import { useState } from 'react';
import { Seo } from '../components/Seo';
import { PageHeader, SectionHeading } from '../components/Section';
import { CourseCard } from '../components/CourseCard';
import { CtaSection } from '../components/CtaSection';
import { FaqAccordion } from '../components/FaqAccordion';
import { COURSES, FAQS } from '../data/content';

type Filter = 'all' | 'exam-prep' | 'ict-skills';

export default function Training() {
  const [filter, setFilter] = useState<Filter>('all');
  const visible = COURSES.filter((c) => filter === 'all' || c.category === filter);

  return (
    <>
      <Seo
        title="Training & ICT Academy"
        description="Exam preparation for IELTS, PTE, CELPIP, SAT, TOEFL, GRE and GMAT, plus ICT skills training in data analysis, digital marketing and UI/UX at SkyTrack ICT."
        path="/training"
      />
      <PageHeader
        eyebrow="Training & ICT Academy"
        title="Exam prep and digital skills that convert into results"
        description="Instructor-led classes built around real test formats and real job requirements — in person or online."
      />

      <section className="py-16 md:py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <SectionHeading eyebrow="Our programmes" title="Choose a course to get started" />
            <div className="flex items-center gap-2 p-1 rounded-full bg-mist border border-line">
              {[
                { id: 'all' as const, label: 'All' },
                { id: 'exam-prep' as const, label: 'Exam Prep' },
                { id: 'ict-skills' as const, label: 'ICT Skills' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                    filter === f.id ? 'bg-ink text-white' : 'text-slate hover:text-ink'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-mist">
        <div className="container-page max-w-3xl">
          <SectionHeading eyebrow="Common questions" title="Training FAQs" />
          <div className="mt-10">
            <FaqAccordion items={FAQS} />
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
