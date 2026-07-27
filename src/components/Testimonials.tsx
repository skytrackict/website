import { Icon } from './Icon';
import { TESTIMONIALS } from '../data/content';

export function Testimonials() {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {TESTIMONIALS.map((t) => (
        <figure key={t.id} className="p-6 rounded-2xl bg-white border border-line shadow-card">
          <div className="flex gap-0.5 text-amber">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" size={14} />
            ))}
          </div>
          <blockquote className="mt-3 text-[0.95rem] text-ink/85 leading-relaxed">“{t.quote}”</blockquote>
          <figcaption className="mt-4 text-sm">
            <span className="font-semibold text-ink">{t.name}</span>
            <span className="text-slate"> — {t.role}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
