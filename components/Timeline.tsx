const milestones = [
  {
    year: '2017',
    title: 'MVP developed and initial investment secured',
    description: 'Peppty Technologies Private Limited founded in Telangana, India. Company established with focus on practical, purposeful digital products.'
  },
  {
    year: '2018',
    title: 'Peppty App officially launched',
    description: 'First consumer launch with privacy-first architecture and verified identity features.'
  },
  {
    year: '2019',
    title: 'Stories App, Votes App, and Shops App launched',
    description: 'Expanded product portfolio with media sharing, civic participation, and hyperlocal commerce platforms.'
  },
  {
    year: '2020',
    title: 'ChatHub launched; user base grew to 1.4M+',
    description: 'Global chat platform launched with trust indicators and moderation tools. User base reached 1.4 million installs across India.'
  },
  {
    year: '2021–2024',
    title: 'Company became profitable; investment returned to investors',
    description: 'Achieved profitability and successfully returned investment to early backers. Continued innovation with in-house R&D.'
  },
  {
    year: '2025',
    title: 'Shares repurchased; Peppty became fully founder-owned',
    description: 'Founder-led group completed share buyback, reinforcing long-term independence and 100% founder ownership.'
  }
];

export default function Timeline() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-medium text-slate-900 md:text-5xl">Our Journey</h2>
        <div className="mt-16 border-l border-slate-200">
          {milestones.map((milestone) => (
            <article key={milestone.year} className="relative pb-12 pl-10 last:pb-0">
              <span className="absolute left-[-0.5rem] top-2 h-3 w-3 rounded-full border-2 border-white bg-primary"></span>
              <span className="text-sm font-medium uppercase tracking-wide text-primary">{milestone.year}</span>
              <h3 className="mt-3 text-xl font-medium text-slate-900">{milestone.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{milestone.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

