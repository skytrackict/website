import { Icon } from './Icon';
import { EnrollButton } from './EnrollButton';
import type { Course } from '../types';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export function CourseCard({ course }: { course: Course }) {
  const midPrice = Math.round((course.priceMin + course.priceMax) / 2 / 500) * 500;

  return (
    <div className="flex flex-col p-6 rounded-2xl border border-line bg-white shadow-card hover:shadow-card-hover transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold text-ink">{course.name}</h3>
        {course.featured && (
          <span className="shrink-0 text-[0.65rem] font-bold uppercase tracking-wide bg-amber/20 text-amber-dark px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-slate leading-relaxed">{course.summary}</p>

      <ul className="mt-4 space-y-1.5">
        {course.outcomes.map((o) => (
          <li key={o} className="flex items-start gap-2 text-sm text-ink/80">
            <Icon name="check" size={14} className="mt-1 shrink-0 text-success" />
            {o}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-4 text-xs text-slate">
        <span className="flex items-center gap-1.5">
          <Icon name="clock" size={14} />
          {course.duration}
        </span>
        <span className="flex items-center gap-1.5">
          <Icon name="monitor" size={14} />
          {course.format}
        </span>
      </div>

      <div className="mt-5 pt-5 border-t border-line flex items-center justify-between gap-4">
        <div>
          <p className="text-xs text-slate">Fee range</p>
          <p className="font-display font-bold text-ink">
            {naira(course.priceMin)} – {naira(course.priceMax)}
          </p>
        </div>
        <EnrollButton
          item={{
            id: course.id,
            kind: 'course',
            name: course.name,
            amount: midPrice,
            description: `${course.duration} · ${course.format}`,
          }}
          label="Enrol Now"
          size="sm"
        />
      </div>
    </div>
  );
}
