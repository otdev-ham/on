import Link from "next/link";
import { PartnerBar } from "@/components/PartnerBar";
import { StatCards } from "@/components/StatCards";

const HERO_VIDEO = "/branding/hero-video.mp4";

export default function HomePage() {
  return (
    <div className="pb-11">
      <header className="relative min-h-[min(88vh,760px)] overflow-hidden bg-maum-gray-100">
        {/* 배경: MP4만 (이미지 포스터/폴백 없음) */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="hero-video-wrap absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-hidden
              >
                <source src={HERO_VIDEO} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/25 sm:from-white sm:via-white/85 sm:to-transparent"
          aria-hidden
        />
        <div className="container-site relative z-10 flex min-h-[min(88vh,760px)] flex-col justify-center py-12 sm:py-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-maum-teal sm:text-xs">
              성동구 발달장애 가족 지원 사업
            </p>

            <h1 className="mt-3 max-w-[20ch] text-balance font-black tracking-[-0.045em] text-maum-navy drop-shadow-sm">
              <span className="block text-[clamp(2.75rem,10vw,4.75rem)] leading-[0.95]">마음으로</span>
              <span className="mt-0.5 block text-[clamp(2.75rem,10vw,4.75rem)] leading-[0.95] sm:mt-1">
                <span className="text-maum-teal">온</span>
                <span className="text-maum-coral">(ON)</span>
              </span>
            </h1>

            <h2 className="mt-8 text-[22px] font-extrabold leading-snug tracking-[-0.02em] text-maum-navy sm:text-[26px] lg:mt-10 lg:text-[30px] lg:leading-[1.2]">
              일상 속 참여와 신뢰를 위해
              <br />
              <span className="text-maum-teal">지역사회와 함께</span> 걸어갑니다
            </h2>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-maum-gray-800 sm:text-base">
              지역사회와 함께하는 작업치료·가족지원 사업입니다. 일상 속 참여와 신뢰를 한 걸음씩
              넓혀 갑니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/recruit#apply"
                className="inline-flex min-h-[48px] min-w-[140px] items-center justify-center rounded-xl bg-maum-teal px-8 text-[15px] font-bold text-white shadow-md transition hover:bg-maum-teal-dark sm:min-w-[160px]"
              >
                지원하기
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-[48px] min-w-[140px] items-center justify-center rounded-xl border-2 border-maum-teal bg-white/95 px-8 text-[15px] font-bold text-maum-teal-dark shadow-sm backdrop-blur-sm transition hover:bg-white sm:min-w-[160px]"
              >
                사업소개
              </Link>
            </div>
          </div>

          <div className="mt-12 flex justify-center sm:mt-16" aria-hidden>
            <svg
              className="h-8 w-5 text-maum-teal/35"
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
