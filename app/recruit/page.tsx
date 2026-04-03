import Link from "next/link";
import { OT_FORM_URL, RECRUITMENT } from "@/lib/site";

const cards = [
  { title: "모집 대상", body: "관련 자격·역량 요건은 공고문 기준을 따릅니다." },
  { title: "활동 내용", body: "프로그램 운영, 기록·협력 등 현장 중심 역할." },
  { title: "혜택", body: "사업 안내에 따른 수당·교육 등 (공고 확인)." },
];

export default function RecruitPage() {
  const active = RECRUITMENT.open;

  return (
    <div className="container-site py-6 pb-12 sm:py-10">
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="text-xl font-bold text-teal-900 sm:text-2xl">OT 모집</h1>
        <span
          className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold sm:text-xs ${
            active ? "bg-coral-500 text-white" : "bg-stone-200 text-stone-700"
          }`}
        >
          {active ? "모집 중" : "마감"}
        </span>
      </div>
      <p className="mt-2 text-sm text-ink-muted sm:text-base">
        매년 가장 자주 갱신되는 페이지입니다. 공고 상태를 확인한 뒤 지원해 주세요.
      </p>

      <section className="mt-6 rounded-2xl border-2 border-coral-400/50 bg-gradient-to-b from-coral-500/5 to-white p-4 shadow-sm sm:p-6">
        <h2 className="text-base font-bold text-teal-900 sm:text-lg">{RECRUITMENT.title}</h2>
        <p className="mt-1 text-xs text-ink-muted sm:text-sm">{RECRUITMENT.deadlineLabel}</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <a
            href={OT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center rounded-xl bg-coral-500 px-4 py-3 text-center text-sm font-bold text-white shadow-md transition hover:bg-coral-600 sm:flex-none sm:min-w-[200px]"
          >
            OT 지원하기 (Google Form)
          </a>
          <Link
            href="/users"
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-teal-200 bg-white px-4 py-3 text-center text-sm font-semibold text-teal-800 hover:bg-teal-50 sm:flex-none"
          >
            이용 안내 보기
          </Link>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-base font-bold text-teal-800 sm:text-lg">조건 · 혜택</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3">
          {cards.map((c) => (
            <li key={c.title} className="rounded-2xl border border-teal-100 bg-white p-3 shadow-sm sm:p-4">
              <p className="text-sm font-semibold text-teal-900">{c.title}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-muted sm:text-sm">{c.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
