import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
}

export default function ProjectCard({ title, description, href, linkLabel = 'View details' }: ProjectCardProps) {
  return (
    <article className="border border-gray-200 rounded-lg p-6 bg-white hover:border-accent/30 transition-colors">
      <h3 className="font-display font-bold text-xl text-black mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
      >
        {linkLabel}
        <span className="ml-1" aria-hidden>→</span>
      </Link>
    </article>
  );
}
