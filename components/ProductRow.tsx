"use client";

type ProductRowProps = {
  title: string;
  description?: string; // 👉 optional (future use)
  children: React.ReactNode;
};

export default function ProductRow({
  title,
  description,
  children,
}: ProductRowProps) {
  return (
    <div className="space-y-4">
      {/* Row Heading */}
      <div className="space-y-1">
        <h3 className="text-lg font-medium">{title}</h3>

        {/* Optional helper text (safe for brand pages later) */}
        {description && (
          <p className="text-sm text-gray-600 max-w-3xl">
            {description}
          </p>
        )}
      </div>

      {/* 
        Mobile: horizontal scroll (brand / product cards)
        Desktop: grid
      */}
      <div
        className="
          flex gap-4 overflow-x-auto pb-3
          snap-x snap-mandatory
          scrollbar-hide

          md:grid md:grid-cols-4 md:gap-6
          md:overflow-visible md:snap-none
        "
      >
        {children}
      </div>
    </div>
  );
}
