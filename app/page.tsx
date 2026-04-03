import Link from "next/link";
import { PartnerBar } from "@/components/PartnerBar";
import { StatCards } from "@/components/StatCards";
import { SERVICE_FORM_URL } from "@/lib/site";

/**
 * 참고 HTML: hero(그라데이션 155deg, 52px 상단 패딩) + stat-strip + 파트너 + 카드
 * 모바일은 max-width 480px 컬럼과 동일한 리듬
 */
export default function HomePage() {
  return (
    <div className="pb-11">
      <header className="relative overflow-hidden bg-[linear-gradient(155deg,#f0faf8_0%,#fff5f2_50%,#fff_100%)] pb-11 pt-[52px]">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(231,111,81,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="maum-narrow relative">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-maum-teal-light px-3 py-1.5 text-xs font-bold text-maum-teal-dark">
            성동구 · <b className="text-maum-coral">발달장애 가족</b> 지원
          </div>
          <h1 className="text-[28px] font-extrabold leading-[1.22] tracking-[-1px] text-maum-navy">
            마음으로 <em className="not-italic text-maum-teal">온(ON)</em>
          </h1>
          <p className="mt-3 text-sm leading-[1.75] text-maum-gray-700">
            지역사회와 함께하는 작업치료·가족지원.
            <br />
            일상 속 참여와 신뢰를 한 걸음씩 넓혀 갑니다.
          </p>
          <a
            href={SERVICE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 mt-6 block w-full rounded-xl bg-maum-teal py-4 text-center text-base font-extrabold tracking-tight text-white"
          >
            서비스 신청하기 →
          </a>
          <Link
            href="/recruit"
            className="block w-full rounded-xl border-[1.5px] border-maum-teal bg-white py-3.5 text-center text-sm font-bold text-maum-teal-dark"
          >
            OT 지원하기
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[480px] px-5 pb-11">
        <StatCards />
      </div>

      <section className="pb-[52px]">
        <PartnerBar />
      </section>

      <section className="bg-maum-gray-100 py-[52px]">
        <div className="maum-narrow flex flex-col gap-2.5">
          <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">More</p>
          <Link
            href="/about"
            className="flex gap-3.5 rounded-[14px] border border-black/[0.07] bg-white px-4 py-[18px]"
          >
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] bg-maum-teal-light text-lg">
              📌
            </span>
            <span>
              <span className="block text-sm font-bold text-maum-navy">사업소개</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-maum-gray-500">
                배경·목적 · 협력기관
              </span>
            </span>
          </Link>
          <Link
            href="/users"
            className="flex gap-3.5 rounded-[14px] border border-black/[0.07] bg-white px-4 py-[18px]"
          >
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] bg-maum-coral-light text-lg">
              📋
            </span>
            <span>
              <span className="block text-sm font-bold text-maum-navy">이용 안내</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-maum-gray-500">
                신청 · 서비스 내용 · FAQ
              </span>
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
