import Link from "next/link";
import { PartnerBar } from "@/components/PartnerBar";
import { StatCards } from "@/components/StatCards";

/** 히어로 배경: 연한 + 격자 (참고 랜딩 스타일) */
function HeroGridPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.45]"
      aria-hidden
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 1h2v10h10v2H13v10h-2V13H1v-2h10V1z' fill='%23cbd5e1' fill-opacity='0.55'/%3E%3C/svg%3E")`,
        backgroundSize: "24px 24px",
      }}
    />
  );
}

export default function HomePage() {
  return (
    <div className="pb-11">
      {/* 랜딩 히어로: PC 2컬럼 / 모바일 세로, 오른쪽 이미지 영역 비움 */}
      <header className="relative overflow-hidden bg-white">
        <HeroGridPattern />
        <div className="container-site relative py-10 sm:py-14 lg:py-16 lg:pb-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="min-w-0">
              <div className="mb-4 inline-flex rounded-full border border-maum-teal/20 bg-maum-teal-light/90 px-3 py-1.5 text-[11px] font-bold tracking-wide text-maum-teal-dark sm:text-xs">
                마음으로 온(ON) · 성동구 발달장애 가족 지원
              </div>

              <h1 className="text-[26px] font-extrabold leading-[1.25] tracking-[-0.5px] text-maum-navy sm:text-3xl lg:text-[34px] lg:leading-[1.2]">
                일상 속 참여와 신뢰를 위해
                <br />
                <span className="text-maum-teal">지역사회와 함께</span> 걸어갑니다
              </h1>

              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-maum-gray-700 sm:text-base">
                지역사회와 함께하는 작업치료·가족지원 사업입니다. 일상 속 참여와 신뢰를 한 걸음씩
                넓혀 갑니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/recruit#apply"
                  className="inline-flex min-h-[48px] min-w-[140px] items-center justify-center rounded-xl bg-maum-teal px-8 text-[15px] font-bold text-white shadow-sm transition hover:bg-maum-teal-dark sm:min-w-[160px]"
                >
                  지원하기
                </Link>
                <Link
                  href="/about"
                  className="inline-flex min-h-[48px] min-w-[140px] items-center justify-center rounded-xl border-2 border-maum-teal bg-white px-8 text-[15px] font-bold text-maum-teal-dark transition hover:bg-maum-teal-light/50 sm:min-w-[160px]"
                >
                  사업소개
                </Link>
              </div>
            </div>

            {/* 이미지 삽입 예정 영역 */}
            <div
              className="relative flex min-h-[220px] w-full items-center justify-center rounded-2xl border-2 border-dashed border-maum-gray-200 bg-maum-gray-50/80 sm:min-h-[280px] lg:min-h-[min(420px,50vh)]"
              aria-label="이미지 영역 (준비 중)"
            >
              <span className="text-center text-sm font-medium text-maum-gray-400">
                이미지 영역
                <span className="mt-1 block text-xs font-normal text-maum-gray-400/90">
                  추후 배너·사진 등록 예정
                </span>
              </span>
            </div>
          </div>

          <div className="mt-10 flex justify-center sm:mt-14 lg:mt-16" aria-hidden>
            <svg
              className="h-8 w-5 text-maum-gray-300"
              viewBox="0 0 24 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2" />
              <path d="M12 10v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </header>

      <div className="container-site pb-11 pt-2">
        <div className="mx-auto w-full max-w-[480px] lg:max-w-none">
          <StatCards />
        </div>
      </div>

      <section className="pb-[52px]">
        <PartnerBar />
      </section>
    </div>
  );
}
