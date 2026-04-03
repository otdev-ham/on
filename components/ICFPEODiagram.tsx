export function ICFPEODiagram() {
  return (
    <div className="rounded-2xl border border-teal-100 bg-gradient-to-b from-teal-50/80 to-white p-3 sm:p-5">
      <p className="mb-3 text-center text-xs font-semibold text-teal-800 sm:text-sm">
        ICF · PEO 관점의 서비스 설계
      </p>
      <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
        <div className="rounded-xl border border-teal-200/60 bg-white p-3 text-center shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-wide text-coral-600 sm:text-xs">Person</p>
          <p className="mt-1 text-xs font-medium text-ink sm:text-sm">당사자 역량 · 참여</p>
        </div>
        <div className="rounded-xl border border-teal-200/60 bg-white p-3 text-center shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700 sm:text-xs">Environment</p>
          <p className="mt-1 text-xs font-medium text-ink sm:text-sm">가정 · 학교 · 지역사회</p>
        </div>
        <div className="rounded-xl border border-teal-200/60 bg-white p-3 text-center shadow-sm sm:col-span-1">
          <p className="text-[10px] font-bold uppercase tracking-wide text-teal-700 sm:text-xs">Occupation</p>
          <p className="mt-1 text-xs font-medium text-ink sm:text-sm">일상 활동 · 역할 수행</p>
        </div>
      </div>
      <p className="mt-3 text-center text-[11px] leading-snug text-ink-muted sm:text-xs">
        세 요소가 맞물리도록 작업치료와 가족지원을 연계합니다.
      </p>
    </div>
  );
}
