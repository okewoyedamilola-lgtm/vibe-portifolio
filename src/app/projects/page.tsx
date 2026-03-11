import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'DamInvest 1.0',
    description:
      'A product concept designed to help university students learn how to invest and save money before graduation. Includes stock investing education, savings features, and financial literacy.',
    href: '/projects/daminvest',
  },
  {
    title: 'Enoverlab Product Manager Internship',
    description:
      'Contributed to product documentation, PRD creation, roadmap development, and cross-functional collaboration with developers and designers. Supported sprint planning and feature delivery.',
    href: '/projects/enoverlab',
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl text-black mb-4">Projects</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Selected product work—from concept and research to roadmap and launch.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.href} {...project} linkLabel="View details" />
        ))}
      </div>
    </div>
  );
}
