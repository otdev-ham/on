import Link from "next/link";
import { PartnerBar } from "@/components/PartnerBar";
import { StatCards } from "@/components/StatCards";
import { OT_FORM_URL, SERVICE_FORM_URL } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="pb-10 pt-3 sm:pb-14 sm:pt-5">
      {/* 한 화면 캡처용: 히어로 + 핵심 수치를 모바일에서 최대한 밀도 있게 */}
      <section className="container-site">
        <div className="rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-teal-50/40 px-3 py-4 shadow-sm sm:px-6 sm:py-7">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-700 sm:text-xs">
            성동구 발달장애 가족 지원
          </p>
          <h1 className="mt-1 text-xl font-bold leading-tight tracking-tight text-teal-900 sm:mt-2 sm:text-3xl">
            마음으로 온<span className="text-teal-600">(ON)</span>
          </h1>
          <p className="mt-2 max-w-prose text-[13px] leading-snug text-ink-muted sm:mt-3 sm:text-base sm:leading-relaxed">
            지역사회와 함께하는 작업치료·가족지원. 일상 속 참여와 신뢰를 한 걸음씩 넓혀 갑니다.
          </p>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-5 sm:gap-3">
            <a
              href={SERVICE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-teal-700 px-2 py-2.5 text-center text-xs font-semibold text-white shadow-sm transition hover:bg-teal-800 sm:py-3 sm:text-sm"
            >
              서비스 신청하기
            </a>
            <Link
              href="/recruit"
              className="inline-flex items-center justify-center rounded-xl bg-coral-500 px-2 py-2.5 text-center text-xs font-semibold text-white shadow-sm transition hover:bg-coral-600 sm:py-3 sm:text-sm"
            >
              OT 지원하기
            </Link>
          </div>

          <div className="mt-3 sm:mt-5">
            <StatCards />
          </div>
        </div>
      </section>

      <section className="container-site mt-4 sm:mt-6">
        <PartnerBar />
      </section>

      <section className="container-site mt-5 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
        <Link
          href="/about"
          className="rounded-2xl border border-teal-100 bg-white p-3 text-sm font-medium text-teal-900 shadow-sm transition hover:border-teal-200 sm:p-4"
        >
          <span className="text-teal-600">사업소개</span>
          <span className="mt-1 block text-xs font-normal text-ink-muted">배경·목적 · 협력기관</span>
        </Link>
        <Link
          href="/users"
          className="rounded-2xl border border-teal-100 bg-white p-3 text-sm font-medium text-teal-900 shadow-sm transition hover:border-teal-200 sm:p-4"
        >
          <span className="text-teal-600">이용 안내</span>
          <span className="mt-1 block text-xs font-normal text-ink-muted">신청 · 서비스 내용 · FAQ</span>
        </Link>
      </section>
    </div>
  );
}
