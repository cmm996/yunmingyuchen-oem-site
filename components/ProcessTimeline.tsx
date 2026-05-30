type ProcessTimelineProps = {
  steps: string[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => (
        <div
          key={step}
          className="relative rounded-lg border border-herb-200 bg-white p-5 shadow-sm"
        >
          <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-herb-800 text-sm font-semibold text-gold-100">
            {index + 1}
          </span>
          <h3 className="text-base font-semibold text-herb-900">{step}</h3>
          {index < steps.length - 1 ? (
            <span className="absolute -right-3 top-1/2 hidden h-px w-6 bg-herb-300 md:block" />
          ) : null}
        </div>
      ))}
    </div>
  );
}
