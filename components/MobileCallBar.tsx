import { mobileBar, site } from "@/content/home";

/** 모바일 화면 하단에 고정되는 전화걸기 / 상담신청 바 (md 이상에서는 숨김) */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-ink-200 bg-white/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3">
        <a
          href={mobileBar.call.href}
          className="flex items-center justify-center gap-2 rounded-xl bg-brand-600 py-3.5 text-sm font-bold text-white active:bg-brand-700"
          aria-label={`${site.phone} 전화 걸기`}
        >
          <PhoneIcon className="size-4" />
          {mobileBar.call.label}
        </a>
        <a
          href={mobileBar.form.href}
          className="flex items-center justify-center gap-2 rounded-xl bg-ink-900 py-3.5 text-sm font-bold text-white active:bg-ink-800"
        >
          {mobileBar.form.label}
        </a>
      </div>
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={className}>
      <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.7a1.5 1.5 0 0 1 1.45 1.11l.66 2.4a1.5 1.5 0 0 1-.4 1.47l-1.03 1a11.5 11.5 0 0 0 4.14 4.14l1-1.03a1.5 1.5 0 0 1 1.47-.4l2.4.66A1.5 1.5 0 0 1 18 12.8v1.7a1.5 1.5 0 0 1-1.5 1.5A14.5 14.5 0 0 1 2 3.5Z" />
    </svg>
  );
}
