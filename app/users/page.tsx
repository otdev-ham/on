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
    <div className="bg-white pb-11">
      <section className="py-[52px]">
        <div className="maum-narrow">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">For users</p>
          <h1 className="text-[21px] font-extrabold leading-snug tracking-[-0.7px] text-maum-navy">이용 안내</h1>
          <p className="mb-6 mt-1.5 text-[13px] leading-relaxed text-maum-gray-500">
            대상·신청·서비스 구성을 한눈에 확인하세요.
          </p>

          <div className="mb-2.5 flex flex-col gap-2.5">
            <div className="rounded-[14px] border border-black/[0.07] bg-maum-gray-100 p-5">
              <h2 className="text-sm font-bold text-maum-navy">대상자 기준</h2>
              <ul className="mt-2 flex flex-col gap-2 text-[13px] leading-relaxed text-maum-gray-700">
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maum-teal" />
                  성동구 관내 거주
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maum-teal" />
                  발달장애 당사자 가족(세부 기준은 공고·안내 준수)
                </li>
                <li className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-maum-teal" />
                  사업 정원 내 선발
                </li>
              </ul>
            </div>
            <div className="rounded-[14px] border border-black/[0.07] bg-white p-5">
              <h2 className="text-sm font-bold text-maum-navy">신청 방법</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-maum-gray-700">
                온라인 신청 양식 제출 후 운영기관 안내에 따라 절차를 진행합니다.
              </p>
              <a
                href={SERVICE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full rounded-xl bg-maum-coral py-[17px] text-center text-base font-extrabold text-white"
              >
                서비스 신청하기 →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-maum-gray-100 py-[52px]">
        <div className="maum-narrow">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">Services</p>
          <h2 className="text-[21px] font-extrabold tracking-tight text-maum-navy">서비스 내용</h2>
          <p className="mb-6 mt-1.5 text-[13px] text-maum-gray-500">ADL · 환경중재 · 가족교육</p>
          <div className="flex flex-col gap-2.5">
            {services.map((s) => (
              <div
                key={s.title}
                className="flex gap-3.5 rounded-[14px] border border-black/[0.07] bg-white px-4 py-[18px]"
              >
                <div>
                  <h3 className="text-sm font-bold text-maum-navy">{s.title}</h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-maum-gray-500">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[52px]">
        <div className="maum-narrow">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">FAQ</p>
          <h2 className="text-[21px] font-extrabold tracking-tight text-maum-navy">자주 묻는 질문</h2>
          <p className="mb-6 mt-1.5 text-[13px] text-maum-gray-500">궁금한 점을 확인하세요</p>
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
