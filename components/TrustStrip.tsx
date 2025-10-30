import Reveal from '@/components/Reveal';

export default function TrustStrip() {
  return (
    <section className="py-10 bg-surface border-y">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
        <Reveal><div>
          <div className="text-2xl font-semibold">Patents</div>
          <div className="text-muted">Patent applications filed (placeholder)</div>
        </div></Reveal>
        <Reveal delay={0.05}><div>
          <div className="text-2xl font-semibold">Trademarks</div>
          <div className="text-muted">Marks registered/under process (placeholder)</div>
        </div></Reveal>
        <Reveal delay={0.1}><div>
          <div className="text-2xl font-semibold">Apps</div>
          <div className="text-muted">Multiple consumer apps built (placeholder)</div>
        </div></Reveal>
        <Reveal delay={0.15}><div>
          <div className="text-2xl font-semibold">Seed</div>
          <div className="text-muted">Early investor support (placeholder)</div>
        </div></Reveal>
      </div>
    </section>
  );
}


