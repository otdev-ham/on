export function ICFPEODiagram() {
  return (
    <div className="rounded-[14px] border border-black/[0.07] bg-maum-teal-light/50 p-5">
      <p className="mb-3 text-center text-xs font-bold text-maum-teal-dark">ICF · PEO 관점의 서비스 설계</p>
      <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
        <div className="rounded-[14px] border border-black/[0.07] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wide text-maum-coral">Person</p>
          <p className="mt-1 text-xs font-medium text-maum-gray-900">당사자 역량 · 참여</p>
        </div>
        <div className="rounded-[14px] border border-black/[0.07] bg-white p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wide text-maum-teal-dark">Environment</p>
          <p className="mt-1 text-xs font-medium text-maum-gray-900">가정 · 학교 · 지역사회</p>
        </div>
        <div className="rounded-[14px] border border-black/[0.07] bg-white p-3 text-center sm:col-span-1">
          <p className="text-[10px] font-bold uppercase tracking-wide text-maum-teal-dark">Occupation</p>
          <p className="mt-1 text-xs font-medium text-maum-gray-900">일상 활동 · 역할 수행</p>
        </div>
      </div>
      <p className="mt-3 text-center text-[11px] leading-snug text-maum-gray-500">
        세 요소가 맞물리도록 작업치료와 가족지원을 연계합니다.
      </p>
    </div>
  );
}
