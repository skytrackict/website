import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Icon } from '../components/Icon';
import { Button } from '../components/Button';
import { EnrollButton } from '../components/EnrollButton';
import { SectionHeading } from '../components/Section';
import { CtaSection } from '../components/CtaSection';
import { COURSES } from '../data/content';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = COURSES.find((c) => c.id === courseId);
  const [openWeek, setOpenWeek] = useState(0);
  const [selectedPackageId, setSelectedPackageId] = useState(
    course?.packages.find((p) => p.recommended)?.id ?? course?.packages[0]?.id,
  );

  if (!course) return <Navigate to="/training" replace />;

  const selectedPackage = course.packages.find((p) => p.id === selectedPackageId) ?? course.packages[0];
  const related = COURSES.filter((c) => c.category === course.category && c.id !== course.id).slice(0, 3);

  return (
    <>
      <Seo
        title={course.name}
        description={course.summary}
        path={`/training/${course.id}`}
      />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="container-page py-14 md:py-18">
          <Link to="/training" className="inline-flex items-center gap-1.5 text-sm text-white/60 hover:text-white">
            <Icon name="arrow-right" size={14} className="rotate-180" />
            Back to Training &amp; ICT Academy
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wide bg-signal/20 text-signal-light px-3 py-1 rounded-full">
              {course.category === 'exam-prep' ? 'Exam Preparation' : 'ICT & Digital Skills'}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wide bg-white/10 text-white/70 px-3 py-1 rounded-full">
              {course.level}
            </span>
          </div>

          <h1 className="mt-4 text-[2rem] md:text-[2.7rem] font-bold leading-[1.1] max-w-2xl">{course.name}</h1>
          <p className="mt-4 text-white/70 max-w-xl leading-relaxed">{course.longDescription}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#packages" size="lg">
              View Packages &amp; Enrol
            </Button>
            <Button to="/contact" size="lg" variant="outline-light">
              Ask a Question
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-page grid lg:grid-cols-[1.4fr_1fr] gap-12">
          <div>
            {/* Key facts */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: 'clock' as const, label: 'Duration', value: course.duration },
                { icon: 'monitor' as const, label: 'Format', value: course.format },
                { icon: 'graduation' as const, label: 'Level', value: course.level },
                { icon: 'award' as const, label: 'Prerequisite', value: course.prerequisite },
              ].map((f) => (
                <div key={f.label} className="flex items-start gap-3 p-4 rounded-xl bg-mist">
                  <Icon name={f.icon} size={16} className="text-signal mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate">{f.label}</p>
                    <p className="text-sm font-medium text-ink mt-0.5">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {course.tools.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {course.tools.map((t) => (
                  <span key={t} className="text-xs font-medium text-ink/70 bg-white border border-line px-3 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Curriculum */}
            <div className="mt-14">
              <SectionHeading eyebrow="Curriculum" title="Course outline" />
              <div className="mt-6 space-y-2">
                {course.curriculum.map((week, i) => {
                  const isOpen = openWeek === i;
                  return (
                    <div key={week.title} className="rounded-xl border border-line bg-white overflow-hidden">
                      <button
                        onClick={() => setOpenWeek(isOpen ? -1 : i)}
                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="font-semibold text-ink text-sm md:text-base">{week.title}</span>
                        <Icon
                          name="chevron-down"
                          size={18}
                          className={`shrink-0 text-slate transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      {isOpen && (
                        <ul className="px-5 pb-4 space-y-2">
                          {week.topics.map((t) => (
                            <li key={t} className="flex items-start gap-2 text-sm text-slate">
                              <Icon name="check" size={13} className="mt-1 shrink-0 text-success" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* What you'll learn */}
            <div className="mt-14">
              <SectionHeading eyebrow="Learning outcomes" title="What you'll learn" />
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {course.whatYouLearn.map((o) => (
                  <li key={o} className="flex items-start gap-2.5 text-sm text-ink/80 p-3.5 rounded-xl bg-mist">
                    <Icon name="check" size={15} className="mt-0.5 shrink-0 text-success" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            {/* What's included */}
            <div className="mt-14">
              <SectionHeading eyebrow="What's included" title="Every enrolment comes with" />
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {course.included.map((item) => (
                  <div key={item.title} className="flex gap-3.5 p-5 rounded-xl border border-line bg-white">
                    <span className="w-10 h-10 rounded-lg bg-signal/10 text-signal flex items-center justify-center shrink-0">
                      <Icon name={item.icon as import('../components/Icon').IconName} size={18} />
                    </span>
                    <div>
                      <p className="font-semibold text-ink text-sm">{item.title}</p>
                      <p className="text-sm text-slate mt-1 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky packages sidebar */}
          <div id="packages" className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl border border-line bg-white shadow-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-signal">Choose your package</p>
              <p className="mt-1.5 text-sm text-slate">
                Select the option that fits your schedule and budget — you'll pay securely with Paystack.
              </p>

              <div className="mt-5 space-y-3">
                {course.packages.map((pkg) => {
                  const isSelected = selectedPackageId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-colors relative ${
                        isSelected ? 'border-signal bg-signal/5' : 'border-line hover:border-signal/40'
                      }`}
                    >
                      {pkg.recommended && (
                        <span className="absolute -top-2.5 right-4 text-[0.6rem] font-bold uppercase tracking-wide bg-amber text-ink px-2 py-0.5 rounded-full">
                          Most popular
                        </span>
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="font-bold text-ink text-sm">{pkg.name}</p>
                          <p className="text-xs text-slate mt-1">{pkg.bestFor}</p>
                        </div>
                        <span
                          className={`w-5 h-5 rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center ${
                            isSelected ? 'border-signal bg-signal' : 'border-line'
                          }`}
                        >
                          {isSelected && <Icon name="check" size={11} className="text-white" />}
                        </span>
                      </div>
                      <p className="mt-3 font-display text-xl font-bold text-ink">{naira(pkg.price)}</p>
                      <ul className="mt-3 space-y-1.5">
                        {pkg.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-xs text-ink/70">
                            <Icon name="check" size={12} className="mt-0.5 shrink-0 text-success" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6">
                {selectedPackage && (
                  <EnrollButton
                    item={{
                      id: `${course.id}-${selectedPackage.id}`,
                      kind: 'course',
                      name: `${course.name} — ${selectedPackage.name}`,
                      amount: selectedPackage.price,
                      description: `${course.duration} · ${course.format}`,
                    }}
                    label={`Enrol — ${naira(selectedPackage.price)}`}
                    className="w-full justify-center"
                  />
                )}
                <p className="mt-3 text-xs text-slate text-center flex items-center justify-center gap-1.5">
                  <Icon name="lock" size={12} />
                  Secured by Paystack
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 md:py-20 bg-mist">
          <div className="container-page">
            <SectionHeading eyebrow="Related" title="You might also like" />
            <div className="mt-8 grid sm:grid-cols-3 gap-5">
              {related.map((c) => (
                <Link
                  key={c.id}
                  to={`/training/${c.id}`}
                  className="p-5 rounded-2xl border border-line bg-white hover:shadow-card-hover transition-shadow"
                >
                  <p className="font-bold text-ink">{c.name}</p>
                  <p className="mt-1.5 text-sm text-slate leading-relaxed">{c.summary}</p>
                  <p className="mt-3 text-sm font-semibold text-signal">
                    From {naira(Math.min(...c.packages.map((p) => p.price)))}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection />
    </>
  );
}
