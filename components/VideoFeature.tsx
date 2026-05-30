import { ExternalLink, PlayCircle } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

type VideoFeatureProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  note: string;
  youtubeId: string;
  youtubeUrl: string;
  ctaLabel: string;
};

export function VideoFeature({
  eyebrow,
  title,
  subtitle,
  paragraphs,
  note,
  youtubeId,
  youtubeUrl,
  ctaLabel
}: VideoFeatureProps) {
  return (
    <section className="bg-white py-20" id="qingcheng-video">
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow={eyebrow}
              title={title}
              description={subtitle}
            />
            <div className="space-y-4 text-base leading-8 text-herb-700">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-herb-700 bg-herb-700 px-6 text-sm font-semibold text-white shadow-lift transition hover:bg-herb-800"
            >
              {ctaLabel}
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-hidden rounded-lg border border-herb-200 bg-herb-50 p-3 shadow-soft">
            <div className="relative aspect-video overflow-hidden rounded-md bg-herb-900">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex items-start gap-3 rounded-md bg-white px-4 py-3 text-sm leading-7 text-herb-700">
              <PlayCircle
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-herb-700"
              />
              <p>{note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
