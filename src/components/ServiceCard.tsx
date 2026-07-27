import { Link } from 'react-router-dom';
import { Icon, type IconName } from './Icon';
import type { Division } from '../types';

export function ServiceCard({ division, index }: { division: Division; index?: number }) {
  return (
    <Link
      to={division.path}
      className="group relative flex flex-col p-6 md:p-7 rounded-2xl border border-line bg-white shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
    >
      {typeof index === 'number' && (
        <span className="absolute top-6 right-6 font-mono text-xs text-slate/50">
          {String(index + 1).padStart(2, '0')}
        </span>
      )}
      <span className="w-11 h-11 rounded-xl bg-signal/10 text-signal flex items-center justify-center group-hover:bg-signal group-hover:text-white transition-colors">
        <Icon name={division.icon as IconName} size={20} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink">{division.name}</h3>
      <p className="mt-1.5 text-sm text-signal font-medium">{division.tagline}</p>
      <p className="mt-3 text-sm text-slate leading-relaxed flex-1">{division.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-signal transition-colors">
        Explore
        <Icon name="arrow-right" size={14} className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
