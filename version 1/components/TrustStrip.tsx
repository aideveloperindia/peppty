import Reveal from '@/components/Reveal';

export default function TrustStrip() {
  return (
    <section className="py-10 bg-surface border-y">
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
        <Reveal><div>
          <div className="text-2xl font-semibold">3+</div>
          <div className="text-muted">Filed patents</div>
        </div></Reveal>
        <Reveal delay={0.05}><div>
          <div className="text-2xl font-semibold">Multiple</div>
          <div className="text-muted">Trademarks</div>
        </div></Reveal>
        <Reveal delay={0.1}><div>
          <div className="text-2xl font-semibold">1.4M+</div>
          <div className="text-muted">Installs (ChatHub)</div>
        </div></Reveal>
        <Reveal delay={0.15}><div>
          <div className="text-2xl font-semibold">Programs</div>
          <div className="text-muted">T-Hub · YC SUS · Startup Istanbul</div>
        </div></Reveal>
      </div>
    </section>
  );
}


