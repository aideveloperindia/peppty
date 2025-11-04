type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
};

import Reveal from '@/components/Reveal';

export default function TeamCard({ name, role, bio }: TeamCardProps) {
  return (
    <Reveal>
      <div className="rounded-xl border bg-white p-6 shadow-subtle">
        <div className="h-16 w-16 rounded-full bg-surface mb-4" aria-hidden />
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-muted">{role}</div>
        <p className="mt-2 text-sm text-muted">{bio}</p>
      </div>
    </Reveal>
  );
}


