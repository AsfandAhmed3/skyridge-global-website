type BulletListProps = {
  items: string[];
};

export default function BulletList({ items }: BulletListProps) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-text-muted">
          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
