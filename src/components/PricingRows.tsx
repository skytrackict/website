import { Link } from 'react-router-dom';
import { EnrollButton } from './EnrollButton';
import { Icon } from './Icon';
import type { WorkspacePlan, BusinessService } from '../types';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

/** Extracts the first number from a price string like "₦2,000" or "₦60,000 – ₦80,000". */
function firstAmount(price: string): number {
  const match = price.match(/[\d,]+/);
  if (!match) return 5000;
  return parseInt(match[0].replace(/,/g, ''), 10) || 5000;
}

export function WorkspacePlanRow({ plan }: { plan: WorkspacePlan }) {
  const amount = firstAmount(plan.price);
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 px-5 rounded-xl border border-line bg-white">
      <div>
        <p className="font-semibold text-ink">{plan.name}</p>
        <p className="text-sm text-slate mt-0.5">
          {plan.capacity && <span>{plan.capacity} · </span>}
          {plan.period}
          {plan.note && <span className="italic"> ({plan.note})</span>}
        </p>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-display font-bold text-ink whitespace-nowrap">{plan.price}</span>
        <EnrollButton
          item={{ id: plan.id, kind: 'workspace', name: plan.name, amount, description: plan.period }}
          label="Book"
          size="sm"
          variant="ghost"
        />
      </div>
    </div>
  );
}

export function BusinessServiceRow({ service }: { service: BusinessService }) {
  return (
    <Link
      to={`/business-solutions/${service.id}`}
      className="block py-5 px-5 rounded-xl border border-line bg-white hover:shadow-card transition-shadow"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-ink">{service.name}</p>
          <p className="text-sm text-slate mt-1">{service.summary}</p>
          <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            {service.deliverables.map((d) => (
              <li key={d} className="text-xs text-ink/60">
                • {d}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
          <span className="font-display font-bold text-ink whitespace-nowrap">
            {naira(service.priceMin)}–{naira(service.priceMax)}
            {service.period && <span className="text-xs font-normal text-slate"> /{service.period}</span>}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-full bg-amber text-ink">
            View Packages
            <Icon name="arrow-right" size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

