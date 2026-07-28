import { Icon } from './Icon';

const orbit = [
  { icon: 'shield-check' as const, style: { top: '10%', left: '50%', transform: 'translate(-50%,0)' } },
  { icon: 'users' as const, style: { top: '50%', right: '6%', transform: 'translate(0,-50%)' } },
  { icon: 'radar' as const, style: { bottom: '10%', left: '50%', transform: 'translate(-50%,0)' } },
  { icon: 'award' as const, style: { top: '50%', left: '6%', transform: 'translate(0,-50%)' } },
];

export function MissionIllustration() {
  return (
    <div className="relative rounded-2xl bg-ink overflow-hidden aspect-[16/9]" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(46,107,255,0.5), transparent 45%), radial-gradient(circle at 20% 85%, rgba(255,176,32,0.3), transparent 40%)',
        }}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46%] aspect-square">
        <div className="absolute inset-0 rounded-full border border-white/15" />
        <div className="absolute inset-[16%] rounded-full border border-white/15" />
        <div className="absolute inset-[32%] rounded-full border border-white/20" />

        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div
            className="radar-sweep absolute inset-0 origin-center"
            style={{ background: 'conic-gradient(from 0deg, rgba(46,107,255,0.4), transparent 70deg)' }}
          />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square rounded-full bg-amber text-ink flex items-center justify-center">
          <Icon name="check" size={18} />
        </div>

        {orbit.map((o) => (
          <span
            key={o.icon}
            style={o.style}
            className="absolute w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center"
          >
            <Icon name={o.icon} size={16} />
          </span>
        ))}
      </div>

      <span className="absolute bottom-3 right-4 text-[0.65rem] font-semibold uppercase tracking-wide text-white/30">
        Our Mission
      </span>
    </div>
  );
}
