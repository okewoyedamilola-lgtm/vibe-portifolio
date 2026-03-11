import SkillSection from '@/components/SkillSection';

const productStrategy = [
  'Product planning',
  'Roadmap development',
  'Prioritization frameworks',
];

const delivery = [
  'Sprint planning',
  'Agile workflows',
  'Feature launch coordination',
];

const research = [
  'User research',
  'Surveys',
  'User personas',
];

const business = [
  'Market analysis',
  'SWOT analysis',
  'Problem framing',
];

const tools = ['Jira', 'Trello', 'Figma', 'Google Forms', 'Canva', 'Slack'];

const processSteps = [
  { step: 1, title: 'Problem discovery', text: 'Identify and validate real user or business problems through data and stakeholder input.' },
  { step: 2, title: 'User research', text: 'Conduct interviews, surveys, and usability studies to understand user needs and behaviors.' },
  { step: 3, title: 'Product definition', text: 'Define scope, requirements, and success metrics in PRDs and align with stakeholders.' },
  { step: 4, title: 'Design collaboration', text: 'Work closely with designers to ensure solutions are usable and aligned with the product vision.' },
  { step: 5, title: 'Development execution', text: 'Support engineering with clear specs, prioritization, and unblocking to ship on time.' },
  { step: 6, title: 'Product launch planning', text: 'Plan rollout, metrics, and iteration based on feedback and outcomes.' },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-display font-bold text-3xl text-black mb-12">About</h1>

      {/* About Me */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-xl text-black mb-4">About Me</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          I am a product manager focused on product strategy, user research, roadmap planning, and cross-functional collaboration with designers and developers. My background has given me a strong foundation in understanding user needs and turning them into clear, actionable product plans.
        </p>
        <p className="text-gray-600 leading-relaxed">
          I am passionate about building useful products that solve real problems. I believe in combining rigorous research with pragmatic execution—shipping iteratively while keeping the user at the center of every decision.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-xl text-black mb-6">Skills</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <SkillSection title="Product Strategy" items={productStrategy} />
          <SkillSection title="Delivery" items={delivery} />
          <SkillSection title="Research" items={research} />
          <SkillSection title="Business" items={business} />
        </div>
      </section>

      {/* Tools */}
      <section className="mb-16">
        <h2 className="font-display font-bold text-xl text-black mb-4">Tools</h2>
        <p className="text-gray-600 text-sm mb-3">Tools I use in my day-to-day work:</p>
        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Product Management Process */}
      <section>
        <h2 className="font-display font-bold text-xl text-black mb-6">My Product Management Process</h2>
        <div className="space-y-6">
          {processSteps.map(({ step, title, text }) => (
            <div key={step} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                {step}
              </span>
              <div>
                <h3 className="font-display font-bold text-black mb-1">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
