interface SkillSectionProps {
  title: string;
  items: string[];
  className?: string;
}

export default function SkillSection({ title, items, className = '' }: SkillSectionProps) {
  return (
    <div className={className}>
      <h3 className="font-display font-bold text-lg text-black mb-3">{title}</h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="text-gray-600 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
