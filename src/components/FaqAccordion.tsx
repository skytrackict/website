import { useState } from 'react';
import { Icon } from './Icon';
import type { FaqItem } from '../types';

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-ink">{item.question}</span>
              <Icon
                name="chevron-down"
                size={18}
                className={`shrink-0 text-slate transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && <p className="pb-5 text-sm text-slate leading-relaxed max-w-2xl">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
