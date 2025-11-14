type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
};

export default function TeamCard({ name, role, bio }: TeamCardProps) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-lg border border-slate-200 bg-white p-8 text-left">
      <div>
        <h3 className="text-xl font-medium text-slate-900">{name}</h3>
        <p className="mt-1 text-sm font-medium text-slate-500">{role}</p>
      </div>
      <p className="text-base leading-relaxed text-slate-600">{bio}</p>
    </div>
  );
}
