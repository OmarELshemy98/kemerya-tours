import { Icon, type IconName } from "@/components/ui/Icon";

type FeatureGridItem = {
  title: string;
  description: string;
  icon: IconName;
};

type FeatureGridProps = {
  items: readonly FeatureGridItem[];
};

const gridClasses = "grid grid-cols-1 gap-[1.2rem] min-[720px]:grid-cols-2";
const cardClasses = [
  "feature-card relative min-h-[260px] rounded-[26px] border border-[rgba(20,23,22,0.06)]",
  "bg-[rgba(255,255,255,0.58)] p-[1.7rem_1.5rem] shadow-[0_18px_28px_rgba(12,13,15,0.04)]",
  "transition-[transform,box-shadow,border-color] duration-[350ms] hover:-translate-y-[6px]",
  "hover:border-[rgba(200,143,47,0.22)] hover:shadow-[0_22px_34px_rgba(12,13,15,0.08)]",
].join(" ");

export function FeatureGrid({ items }: FeatureGridProps) {
  return (
    <div className={gridClasses}>
      {items.map((item) => (
        <article key={item.title} className={cardClasses}>
          <div className="feature-card__icon">
            <Icon name={item.icon} />
          </div>
          <h3 className="mb-[0.7rem] text-[1.7rem]">{item.title}</h3>
          <p className="text-[var(--color-stone)]">{item.description}</p>
        </article>
      ))}
    </div>
  );
}