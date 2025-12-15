"use client";

export default function ProductRow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">{title}</h3>

      {/* Mobile: horizontal scroll | Desktop: grid */}
      <div
        className="
          flex gap-4 overflow-x-auto pb-2
          md:grid md:grid-cols-4 md:gap-6 md:overflow-visible
        "
      >
        {children}
      </div>
    </div>
  );
}
