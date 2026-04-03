import { ICFPEODiagram } from "@/components/ICFPEODiagram";
import { PartnerBar } from "@/components/PartnerBar";

export default function AboutPage() {
  return (
    <div className="container-site py-6 pb-12 sm:py-10">
      <h1 className="text-xl font-bold text-teal-900 sm:text-2xl">사업소개</h1>
      <p className="mt-2 text-sm text-ink-muted sm:text-base">
        발달장애 가족의 일상 참여와 안정적인 돌봄을 지역사회 자원과 연결합니다.
      </p>

      <section className="mt-6 space-y-4">
        <div className="rounded-2xl border border-teal-100 bg-white p-4 shadow-sm sm:p-6">
          <h2 className="text-base font-bold text-teal-800 sm:text-lg">사업 배경 및 필요성</h2>
          <p className="mt-2 text-[13px] leading-relaxed text-ink-muted sm:text-sm">
            가정·학교·지역이 함께하는 지원이 필요합니다. 작업치료 관점에서 일상 활동(ADL), 환경 조정,
            가족 교육을 통합적으로 제공하여 가족의 부담을 완화하고 당사자의 참여를 돕습니다.
          </p>
        </div>

        <ICFPEODiagram />

        <div>
          <h2 className="mb-3 text-base font-bold text-teal-800 sm:text-lg">협력기관</h2>
          <PartnerBar />
        </div>
      </section>
    </div>
  );
}
