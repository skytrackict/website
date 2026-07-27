import { EnrollButton } from './EnrollButton';
import type { WorkspacePlan, BusinessService, TestingService } from '../types';

function naira(n: number) {
  return `₦${n.toLocaleString('en-NG')}`;
}

export function WorkspacePlanRow({ plan }: { plan: WorkspacePlan }) {
  const amount = parseInt(plan.price.replace(/[^\d]/g, '')) || 5000;
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
  const midAmount = Math.round((service.priceMin + service.priceMax) / 2 / 500) * 500;
  return (
    <div className="py-5 px-5 rounded-xl border border-line bg-white">
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
        <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 shrink-0">
          <span className="font-display font-bold text-ink whitespace-nowrap">
            {naira(service.priceMin)}–{naira(service.priceMax)}
            {service.period && <span className="text-xs font-normal text-slate"> /{service.period}</span>}
          </span>
          <EnrollButton
            item={{ id: service.id, kind: 'business-service', name: service.name, amount: midAmount, description: service.summary }}
            label="Get Started"
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}

export function TestingServiceRow({ service }: { service: TestingService }) {
  const midAmount = Math.round((service.priceMin + service.priceMax) / 2 / 500) * 500;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-4 px-5 rounded-xl border border-line bg-white">
      <div>
        <p className="font-semibold text-ink">{service.name}</p>
        <p className="text-sm text-slate mt-0.5">{service.summary}</p>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        <span className="font-display font-bold text-ink whitespace-nowrap text-sm">
          {naira(service.priceMin)}–{naira(service.priceMax)}
        </span>
        <EnrollButton
          item={{ id: service.id, kind: 'testing-service', name: service.name, amount: midAmount, description: service.period }}
          label="Request"
          size="sm"
          variant="ghost"
        />
      </div>
    </div>
  );
}
