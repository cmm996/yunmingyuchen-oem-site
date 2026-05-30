type QuoteCardProps = {
  quote: string;
  note?: string;
};

export function QuoteCard({ quote, note }: QuoteCardProps) {
  return (
    <figure className="rounded-lg border border-gold-300 bg-white p-6 shadow-sm">
      <blockquote className="text-2xl font-semibold leading-snug text-herb-900 sm:text-3xl">
        {quote}
      </blockquote>
      {note ? (
        <figcaption className="mt-4 text-sm leading-7 text-herb-700">
          {note}
        </figcaption>
      ) : null}
    </figure>
  );
}
