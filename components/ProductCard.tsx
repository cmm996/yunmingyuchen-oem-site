import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  suitableChannels: string;
  cooperationMethod: string;
};

export function ProductCard({
  title,
  description,
  image,
  tags,
  suitableChannels,
  cooperationMethod
}: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-herb-200 bg-white shadow-sm">
      <div className="relative aspect-[4/3] bg-herb-100">
        <Image
          src={image}
          alt={`${title}产品展示`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-herb-900">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-herb-700">{description}</p>
        <div className="mt-5 space-y-3 rounded-md border border-herb-200 bg-herb-50 p-4">
          <p className="text-sm leading-6 text-herb-800">
            <span className="font-semibold text-herb-900">适合渠道：</span>
            {suitableChannels}
          </p>
          <p className="text-sm leading-6 text-herb-800">
            <span className="font-semibold text-herb-900">合作方式：</span>
            {cooperationMethod}
          </p>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 rounded-full border border-herb-200 bg-herb-50 px-3 py-1 text-xs font-medium text-herb-700"
            >
              <CheckCircle2 aria-hidden="true" className="h-3.5 w-3.5" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
