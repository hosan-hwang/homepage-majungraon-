import { cn } from "@/lib/cn";

type TimelineStepProps = {
  step: string;
  title: string;
  summary: string;
  duration: string;
  details: readonly string[];
  badge?: React.ReactNode;
  isLast?: boolean;
};

export function TimelineStep({
  step,
  title,
  summary,
  duration,
  details,
  badge,
  isLast = false,
}: TimelineStepProps) {
  return (
    <li className="relative flex gap-5 sm:gap-6">
      {/* 단계 번호 + 세로 연결선 */}
      <div className="flex flex-col items-center">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-extrabold text-white">
          {step}
        </span>
        {!isLast && <span aria-hidden className="mt-2 w-px flex-1 bg-ink-200" />}
      </div>

      <div className={cn("min-w-0 flex-1", isLast ? "pb-0" : "pb-8 sm:pb-10")}>
        <div className="rounded-2xl border border-ink-200 bg-white p-5 transition-shadow hover:shadow-md sm:p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h3 className="text-lg font-bold text-ink-900 sm:text-xl">{title}</h3>
            {badge}
            <span className="ml-auto text-xs font-semibold text-ink-500">{duration}</span>
          </div>

          <p className="mt-2.5 text-sm leading-relaxed text-ink-600 sm:text-base">{summary}</p>

          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {details.map((detail) => (
              <li
                key={detail}
                className="rounded-lg bg-ink-50 px-3 py-2 text-xs leading-relaxed text-ink-700"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
