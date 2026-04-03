import type { ReactNode } from "react";
import { RecruitFaq } from "@/components/RecruitFaq";
import { OT_FORM_URL, RECRUITMENT, SEOUL_OT_INSTAGRAM_URL } from "@/lib/site";

const benefits = [
  { icon: "📋", title: "ICF 기반 기록 역량", body: "오리엔테이션을 통해 ICF·작업기반 기록 양식 교육 제공", bg: "bg-maum-teal-light" },
  { icon: "🤝", title: "슈퍼비전 & 사례회의", body: "슈퍼바이저 치료사와 상호보완하며 성장하는 구조", bg: "bg-maum-coral-light" },
  { icon: "🔬", title: "연구 참여 기회", body: "지역사회 OT 연구 목적으로 활용, 자료집 편찬 참여 가능", bg: "bg-[#FFF8E7]" },
  { icon: "🌐", title: "OT 네트워크", body: "사업 마무리 보고회 참여로 전문가 커뮤니티 형성", bg: "bg-maum-navy-light" },
];

const purposes = [
  "장애 당사자와 가족의 건강 증진을 위한 1:1 맞춤형 서비스 제공",
  "지역사회 내 작업 활동과 참여를 지원하는 방문 OT 실천",
  "통합돌봄 취지에 맞춘 지역사회 재활 체계 구축",
  "참여 OT 간 상호보완 네트워크 형성 및 연구 데이터 축적",
];

const eligibility = [
  <>서울특별시작업치료사회 <strong>협회 회원</strong></>,
  <>
    <strong>방문 작업치료 경험</strong>이 있는 작업치료사
  </>,
  <>
    지역사회 기반 OT에 <strong>관심</strong>이 있는 작업치료사
  </>,
  <>ICF·작업기반 기록을 배우고 싶은 분</>,
];

const processSteps = [
  { n: 1, title: "지원서 제출", desc: "구글폼으로 신청 · 이름, 소속, 임상경력, 연락처 등 입력" },
  { n: 2, title: "매칭 및 오리엔테이션 (4~5월)", desc: "클라이언트 1:1 매칭 · ICF/작업기반 기록 양식 교육" },
  { n: 3, title: "방문 서비스 제공 (5~11월)", desc: "최대 20회기 · 1회 60분 · 평가-중재-결과 기록" },
  { n: 4, title: "사례회의 & 슈퍼비전 (정기)", desc: "참여 OT 간 교류 · 슈퍼바이저와 상호보완" },
  { n: 5, title: "마무리 보고회 & 자료집 (12월)", desc: "성과 공유 · 연구 자료집 편찬 참여 가능" },
];

const conditions = [
  { label: "활동 기간", val: "2026년", small: "4월 — 12월" },
  { label: "회기당 비용", val: "100,000원", small: "1회 60분" },
  { label: "최대 회기", val: "20회기", small: "클라이언트 1인당" },
  { label: "서비스 형태", val: "방문형", small: "가정·지역사회" },
];

function Narrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`maum-narrow ${className}`}>{children}</div>;
}

export default function RecruitPage() {
  return (
    <div className="bg-white text-maum-gray-900">
      {/* 참고 HTML: 단일 56px 네비는 Header에 통합 (모바일 모집 배지·지원하기) */}

      <header className="relative overflow-hidden bg-[linear-gradient(155deg,#f0faf8_0%,#fff5f2_50%,#fff_100%)] pb-11 pt-[52px]">
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-[180px] w-[180px] rounded-full opacity-100"
          style={{
            background: "radial-gradient(circle, rgba(231,111,81,0.1) 0%, transparent 70%)",
          }}
        />
        <Narrow className="relative">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-maum-teal-light px-3 py-1.5 text-xs font-bold text-maum-teal-dark">
            {RECRUITMENT.year}년 · <b className="text-maum-coral">6년째 지속</b> 사업
          </div>
          <h1 className="text-[28px] font-extrabold leading-[1.22] tracking-[-1px] text-maum-navy">
            지역사회에서
            <br />
            <em className="not-italic text-maum-teal">작업치료</em>를
            <br />
            실천하실 분
          </h1>
          <p className="mt-3 text-sm leading-[1.75] text-maum-gray-700">
            방문 작업치료사를 모집합니다.
            <br />
            ICF 기반 평가·중재·기록과 슈퍼비전으로
            <br />
            함께 성장하는 구조입니다.
          </p>
          <div className="mb-6 mt-2 inline-flex items-center gap-1.5 rounded-lg bg-maum-navy-light px-3.5 py-2 text-xs font-semibold text-maum-navy leading-normal">
            📅 2021년 시작 · <span className="text-maum-coral">올해 통합돌봄 연계</span> 전환
          </div>
          <a
            href={OT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block w-full rounded-xl bg-maum-coral py-4 text-center text-base font-extrabold tracking-tight text-white"
          >
            지원서 작성하기 →
          </a>
          <a
            href="#about"
            className="block w-full rounded-xl border-[1.5px] border-maum-teal bg-white py-3.5 text-center text-sm font-bold text-maum-teal-dark"
          >
            사업 내용 더 보기
          </a>
        </Narrow>
      </header>

      {/* Stat strip */}
      <div className="mx-auto grid w-full max-w-[480px] grid-cols-3 gap-2 px-5 pb-11">
        <div className="rounded-[10px] bg-maum-gray-100 px-2.5 py-4 text-center">
          <p className="text-2xl font-extrabold leading-none tracking-tight text-maum-teal-dark">
            20<sub className="align-baseline text-[13px] font-semibold">회</sub>
          </p>
          <p className="mt-1 text-[11px] font-medium leading-[1.4] text-maum-gray-500">
            케이스당
            <br />
            최대 회기
          </p>
        </div>
        <div className="rounded-[10px] bg-maum-gray-100 px-2.5 py-4 text-center">
          <p className="text-2xl font-extrabold leading-none tracking-tight text-maum-teal-dark">
            10<sub className="align-baseline text-[13px] font-semibold">만</sub>
          </p>
          <p className="mt-1 text-[11px] font-medium leading-[1.4] text-maum-gray-500">
            회기당
            <br />
            지급 비용
          </p>
        </div>
        <div className="rounded-[10px] bg-maum-gray-100 px-2.5 py-4 text-center">
          <p className="text-2xl font-extrabold leading-none tracking-tight text-maum-teal-dark">
            6<sub className="align-baseline text-[13px] font-semibold">년</sub>
          </p>
          <p className="mt-1 text-[11px] font-medium leading-[1.4] text-maum-gray-500">
            사업
            <br />
            연속 운영
          </p>
        </div>
      </div>

      {/* About */}
      <section id="about" className="py-[52px]">
        <Narrow>
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">About</p>
          <h2 className="text-[21px] font-extrabold leading-snug tracking-tight text-maum-navy">
            이 사업은
            <br />
            무엇인가요?
          </h2>
          <p className="mb-6 mt-1.5 text-[13px] leading-relaxed text-maum-gray-500">
            성동구장애가족지원센터·서울특별시작업치료사회가 함께 운영하는 지역사회기반 방문작업치료 사업입니다.
          </p>
          <div className="rounded-[14px] bg-maum-teal-light p-5">
            <h3 className="mb-3 text-[15px] font-bold text-maum-teal-dark">🎯 사업 목적</h3>
            <ul className="flex flex-col gap-2">
              {purposes.map((text) => (
                <li key={text} className="flex gap-2.5 text-[13px] leading-relaxed text-maum-gray-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maum-teal" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Narrow>
      </section>

      {/* Benefits */}
      <section className="bg-maum-gray-100 py-[52px]">
        <Narrow>
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">Benefits</p>
          <h2 className="text-[21px] font-extrabold leading-snug tracking-tight text-maum-navy">
            참여하면
            <br />
            무엇을 얻나요?
          </h2>
          <p className="mb-6 mt-1.5 text-[13px] text-maum-gray-500">치료비 이상의 성장을 경험합니다</p>
          <div className="flex flex-col gap-2.5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-3.5 rounded-[14px] border border-black/[0.07] bg-white px-4 py-[18px]"
              >
                <div
                  className={`flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[11px] text-[19px] ${b.bg}`}
                >
                  {b.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-tight text-maum-navy">{b.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-maum-gray-500">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Narrow>
      </section>

      {/* Eligibility */}
      <section className="py-[52px]">
        <Narrow>
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">Eligibility</p>
          <h2 className="text-[21px] font-extrabold leading-snug tracking-tight text-maum-navy">
            이런 분을
            <br />
            찾습니다
          </h2>
          <p className="mb-4 mt-1.5 text-[13px] text-maum-gray-500">서울시작업치료사회 회원이라면 누구나</p>
          <ul className="mb-4 flex flex-col gap-2">
            {eligibility.map((node, i) => (
              <li key={i} className="flex gap-2.5 text-[13px] leading-relaxed text-maum-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maum-teal" />
                <span>{node}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-[10px] border border-[#FFE58A] bg-[#FFFBF0] p-4">
            <p className="text-xs leading-relaxed text-[#8A6D00]">
              ⚠️ 활동 기간(4~12월) 중 정기적인 사례회의 참여가 필요합니다.
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-[#8A6D00]">
              ⚠️ 지역사회 OT 기록의 연구 목적 활용에 동의하셔야 신청 가능합니다.
            </p>
          </div>
        </Narrow>
      </section>

      {/* Process */}
      <section className="bg-maum-gray-100 py-[52px]">
        <Narrow>
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">Process</p>
          <h2 className="text-[21px] font-extrabold leading-snug tracking-tight text-maum-navy">
            어떻게
            <br />
            진행되나요?
          </h2>
          <p className="mb-6 mt-1.5 text-[13px] text-maum-gray-500">신청부터 마무리까지</p>
          <div className="flex flex-col">
            {processSteps.map((step, idx) => (
              <div key={step.n} className="flex gap-4 pb-5 last:pb-0">
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-maum-teal text-[13px] font-extrabold text-white">
                    {step.n}
                  </div>
                  {idx < processSteps.length - 1 ? (
                    <div className="mt-1 w-0.5 flex-1 min-h-[20px] bg-maum-gray-200" aria-hidden />
                  ) : null}
                </div>
                <div className="min-w-0 flex-1 pt-1 pb-1">
                  <p className="text-sm font-bold tracking-tight text-maum-navy">{step.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-maum-gray-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Narrow>
      </section>

      {/* Conditions */}
      <section className="py-[52px]">
        <Narrow>
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">Conditions</p>
          <h2 className="text-[21px] font-extrabold leading-snug tracking-tight text-maum-navy">활동 조건</h2>
          <p className="mb-6 mt-1.5 text-[13px] text-maum-gray-500">활동 기간 및 보수 안내</p>
          <div className="grid grid-cols-2 gap-2">
            {conditions.map((c) => (
              <div key={c.label} className="rounded-[10px] bg-maum-gray-100 px-3 py-3.5">
                <p className="text-[10px] font-bold uppercase tracking-wide text-maum-teal">{c.label}</p>
                <p className="mt-1 text-[15px] font-extrabold leading-tight tracking-tight text-maum-navy">
                  {c.val}
                  <small className="mt-0.5 block text-[11px] font-medium text-maum-gray-500">{c.small}</small>
                </p>
              </div>
            ))}
          </div>
        </Narrow>
      </section>

      {/* Apply */}
      <div id="apply" className="bg-maum-navy py-[52px] text-white">
        <Narrow>
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-coral">Apply</p>
          <h2 className="text-[21px] font-extrabold leading-snug text-white">
            지금 바로
            <br />
            지원하세요
          </h2>
          <p className="mb-6 mt-1.5 text-[13px] text-white/55">{RECRUITMENT.deadlineLabel}</p>
          <div className="mb-4 flex items-center gap-3.5 rounded-[14px] border border-white/12 bg-white/[0.07] p-[18px]">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maum-teal text-[15px] font-extrabold text-white">
              박
            </div>
            <div>
              <p className="text-[15px] font-bold text-white">박새롬 이사</p>
              <p className="text-xs text-white/50">서울특별시작업치료사회 · 사업 담당</p>
            </div>
          </div>
          <a
            href={OT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-xl bg-maum-coral py-[17px] text-center text-base font-extrabold tracking-tight text-white"
          >
            지원서 작성하기 →
          </a>
          <p className="mt-3 text-center text-xs leading-relaxed text-white/45">
            문의: 서울특별시작업치료사회 ·{" "}
            <a
              href={SEOUL_OT_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/90 underline-offset-2 hover:underline"
            >
              인스타그램 @kaot.seoul
            </a>
          </p>
        </Narrow>
      </div>

      {/* FAQ */}
      <section className="py-[52px] pb-16">
        <Narrow>
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">FAQ</p>
          <h2 className="text-[21px] font-extrabold tracking-tight text-maum-navy">자주 묻는 질문</h2>
          <p className="mb-6 mt-1.5 text-[13px] text-maum-gray-500">궁금한 점을 확인하세요</p>
          <RecruitFaq />
        </Narrow>
      </section>
    </div>
  );
}
