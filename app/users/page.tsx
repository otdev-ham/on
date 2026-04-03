import { FAQAccordion } from "@/components/FAQAccordion";
import { SERVICE_FORM_URL } from "@/lib/site";

const services = [
  {
    title: "ADL · 일상 활동",
    body: "일상 속 자립과 참여를 돕는 활동 중심 지원.",
  },
  {
    title: "환경 중재",
    body: "가정·학교 등 환경을 점검하고 실천 가능한 조정을 제안합니다.",
  },
  {
    title: "가족 교육",
    body: "보호자의 이해와 대응을 돕는 교육·상담을 병행합니다.",
  },
];

export default function UsersPage() {
  return (
    <div className="container-site py-6 pb-12 sm:py-10">
      <h1 className="text-xl font-bold text-teal-900 sm:text-2xl">이용 안내</h1>
      <p className="mt-2 text-sm text-ink-muted sm:text-base">대상·신청·서비스 구성을 한눈에 확인하세요.</p>

      <section className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div className="rounded-2xl border border-teal-100 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-bold text-teal-800 sm:text-base">대상자 기준</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-[13px] text-ink-muted sm:text-sm">
            <li>성동구 관내 거주</li>
            <li>발달장애 당사자 가족(세부 기준은 공고·안내 준수)</li>
            <li>사업 정원 내 선발</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-teal-100 bg-white p-4 shadow-sm">
          <h2 className="text-sm font-bold text-teal-800 sm:text-base">신청 방법</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-muted sm:text-sm">
            온라인 신청 양식 제출 후 운영기관 안내에 따라 절차를 진행합니다.
          </p>
          <a
            href={SERVICE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-teal-700 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 sm:w-auto sm:px-6"
          >
            서비스 신청하기
          </a>
        </div>
      </section>

      <section className="mt-6">
        <h2 className="text-base font-bold text-teal-800 sm:text-lg">서비스 내용</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3">
          {services.map((s) => (
            <li key={s.title} className="rounded-2xl border border-teal-100 bg-teal-50/50 p-3 sm:p-4">
              <p className="text-sm font-semibold text-teal-900">{s.title}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-ink-muted sm:text-sm">{s.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-bold text-teal-800 sm:text-lg">자주 묻는 질문</h2>
        <div className="mt-3">
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
