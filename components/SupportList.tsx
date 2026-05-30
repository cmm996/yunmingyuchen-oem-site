import { FileText, MessageSquareText, PackageCheck, Video } from "lucide-react";

const icons = [FileText, PackageCheck, MessageSquareText, Video];

type SupportListProps = {
  items: string[];
};

export function SupportList({ items }: SupportListProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <div
            key={item}
            className="flex min-h-20 items-center gap-4 rounded-lg border border-herb-200 bg-white px-5 py-4 shadow-sm"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-herb-100 text-herb-700">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
            <span className="text-sm font-medium leading-6 text-herb-800">
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );
}
