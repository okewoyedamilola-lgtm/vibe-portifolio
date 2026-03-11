import Link from 'next/link';
import { notFound } from 'next/navigation';

const projects: Record<
  string,
  {
    title: string;
    subtitle?: string;
    problem: string;
    research: string;
    solution: string;
    productStrategy: string;
    outcome: string;
    caseStudyPdf?: string;
  }
> = {
  daminvest: {
    title: 'DamInvest 1.0',
    subtitle: 'Investing & financial literacy for university students',
    problem:
      'University students often lack access to practical investing and savings education before graduation, leading to delayed financial literacy and missed compounding opportunities.',
    research:
      'Market and user research were conducted to understand student financial behaviors, pain points, and learning preferences. User personas were created to guide product decisions. A SWOT analysis helped frame competitive and market context.',
    solution:
      'DamInvest 1.0 is a product concept that combines stock investing education, savings features, and financial literacy content tailored for students—enabling them to start investing while still in school.',
    productStrategy:
      'A product roadmap and launch roadmap were developed. A PRD was written to align stakeholders on scope, requirements, and success metrics. Wireframes were created to align design and development.',
    outcome:
      'Deliverables included market research, user research, user personas, SWOT analysis, wireframes, product roadmap, product launch roadmap, and a PRD—setting a clear foundation for future development and launch.',
    caseStudyPdf: '/case-studies/daminvest.pdf',
  },
  enoverlab: {
    title: 'Enoverlab Product Manager Internship',
    subtitle: 'Product documentation, planning & cross-functional collaboration',
    problem:
      'Product teams need clear documentation, aligned roadmaps, and smooth collaboration between product, design, and engineering to ship features on time and according to vision.',
    research:
      'Work involved understanding existing product goals, user needs, and design intent. Collaboration with designers and developers ensured that research and requirements were reflected in execution.',
    solution:
      'Contributed to product documentation and PRD creation, assisted with product planning and roadmap development, and supported sprint planning and stand-up meetings to keep delivery on track.',
    productStrategy:
      'Helped ensure developers understood product goals and vision, and that features aligned with UI/UX designs. Supported tracking of feature delivery and roadmap schedules.',
    outcome:
      'Gained hands-on experience in PRD writing, roadmap development, sprint planning, and cross-functional collaboration. Helped ensure features launched according to roadmap schedules.',
    caseStudyPdf: '/case-studies/enoverlab.pdf',
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) notFound();

  const sections = [
    { id: 'problem', title: 'Problem', content: project.problem },
    { id: 'research', title: 'Research', content: project.research },
    { id: 'solution', title: 'Solution', content: project.solution },
    { id: 'product-strategy', title: 'Product Strategy', content: project.productStrategy },
    { id: 'outcome', title: 'Outcome', content: project.outcome },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/projects"
        className="inline-block text-sm font-medium text-accent hover:text-accent-hover mb-8"
      >
        ← Back to Projects
      </Link>

      <header className="mb-12">
        <h1 className="font-display font-bold text-3xl text-black mb-2">{project.title}</h1>
        {project.subtitle && (
          <p className="text-gray-600 text-lg">{project.subtitle}</p>
        )}
      </header>

      <div className="space-y-12">
        {sections.map(({ id, title, content }) => (
          <section key={id}>
            <h2 className="font-display font-bold text-xl text-black mb-3">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{content}</p>
          </section>
        ))}
      </div>

      {project.caseStudyPdf && (
        <section className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">Full case study documentation:</p>
          <a
            href={project.caseStudyPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-100 text-black font-medium text-sm rounded-md hover:bg-gray-200 transition-colors"
          >
            View / Download PDF
          </a>
        </section>
      )}
    </div>
  );
}
