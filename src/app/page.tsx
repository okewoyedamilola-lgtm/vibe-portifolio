import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';

const featuredProjects = [
  {
    title: 'DamInvest 1.0',
    description:
      'A product concept to help university students learn investing and saving before graduation—stock education, savings features, and financial literacy.',
    href: '/projects/daminvest',
  },
  {
    title: 'Enoverlab Product Manager Internship',
    description:
      'Contributed to product documentation, PRDs, roadmap development, and cross-functional collaboration with design and engineering teams.',
    href: '/projects/enoverlab',
  },
];

const skills = [
  'Product Strategy',
  'User Research',
  'Roadmap Planning',
  'PRD Writing',
  'Cross-functional Collaboration',
  'Agile Development',
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <h1 className="font-display font-bold text-3xl md:text-4xl text-black mb-3">
          Damilola Israel Okewoye
        </h1>
        <p className="text-xl text-accent font-semibold mb-4">Product Manager</p>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-8">
          I build products that combine user research, strategy, and execution to solve real problems.
        </p>
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-accent text-white font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors"
        >
          View Projects
        </Link>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50/50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="font-display font-bold text-2xl text-black mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.href} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Snapshot */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-display font-bold text-2xl text-black mb-8">Skills Snapshot</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <p className="font-display font-bold text-2xl text-black mb-6">
            Interested in working together?
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-accent text-white font-semibold text-sm rounded-md hover:bg-accent-hover transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
}
