import { Icon } from './Icon';

const nodes = [
  { icon: 'radar' as const, label: 'Testing' },
  { icon: 'graduation' as const, label: 'Training' },
  { icon: 'code' as const, label: 'Software' },
  { icon: 'building' as const, label: 'Workspace' },
];

export function StoryIllustration() {
  return (
    <div className="relative rounded-2xl bg-ink overflow-hidden aspect-[16/9]" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 15% 20%, rgba(46,107,255,0.5), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,176,32,0.3), transparent 40%)',
        }}
      />

      {/* connecting line */}
      <div className="absolute left-[12%] right-[12%] top-1/2 -translate-y-1/2 h-px bg-white/15" />
      <div className="absolute left-[12%] top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-signal-light via-signal to-transparent w-[35%]" />

      <div className="absolute inset-0 flex items-center justify-between px-[8%]">
        {nodes.map((n, i) => (
          <div key={n.label} className="relative flex flex-col items-center gap-2.5">
            <span
              className={`w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center border ${
                i === nodes.length - 1
                  ? 'bg-amber text-ink border-amber'
                  : 'bg-white/10 text-white border-white/20'
              }`}
            >
              <Icon name={n.icon} size={20} />
            </span>
            <span className="text-[0.65rem] md:text-xs font-semibold text-white/70 whitespace-nowrap">{n.label}</span>
          </div>
        ))}
      </div>

      <span className="absolute bottom-3 right-4 text-[0.65rem] font-semibold uppercase tracking-wide text-white/30">
        Our Journey
      </span>
    </div>
  );
}
