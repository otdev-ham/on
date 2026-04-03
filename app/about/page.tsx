import { ICFPEODiagram } from "@/components/ICFPEODiagram";
import { PartnerBar } from "@/components/PartnerBar";

export default function AboutPage() {
  return (
    <div className="bg-white pb-11">
      <section className="py-[52px]">
        <div className="maum-narrow">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">About</p>
          <h1 className="text-[21px] font-extrabold leading-snug tracking-[-0.7px] text-maum-navy">사업소개</h1>
          <p className="mb-6 mt-1.5 text-[13px] leading-relaxed text-maum-gray-500">
            발달장애 가족의 일상 참여와 안정적인 돌봄을 지역사회 자원과 연결합니다.
          </p>
          <div className="rounded-[14px] border border-black/[0.07] bg-white p-5">
            <h2 className="text-[15px] font-bold text-maum-teal-dark">사업 배경 및 필요성</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-maum-gray-700">
              가정·학교·지역이 함께하는 지원이 필요합니다. 작업치료 관점에서 일상 활동(ADL), 환경 조정,
              가족 교육을 통합적으로 제공하여 가족의 부담을 완화하고 당사자의 참여를 돕습니다.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-maum-gray-100 py-[52px]">
        <div className="maum-narrow">
          <ICFPEODiagram />
        </div>
      </section>

      <section className="py-[52px]">
        <PartnerBar />
      </section>
    </div>
  );
}
