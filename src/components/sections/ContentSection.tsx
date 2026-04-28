type ContentSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="bg-background px-6 py-14">
      <div className="mx-auto w-full max-w-4xl">
        <h2 className="text-2xl font-semibold leading-tight text-text-main">
          {title}
        </h2>
        <div className="mt-4 max-w-3xl space-y-4 text-sm leading-6 text-text-muted">
          {children}
        </div>
      </div>
    </section>
  );
}
