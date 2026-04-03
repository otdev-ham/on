const partners = [
  "성동구장애인가족지원센터",
  "서울시작업치료사회",
  "별별생활체육센터",
];

/** 참고 HTML 톤: eyebrow + 리스트 */
export function PartnerBar() {
  return (
    <div className="mx-auto w-full max-w-[480px] px-5">
      <p className="mb-2 text-center text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">
        협력 · 파트너
      </p>
      <ul className="flex flex-col gap-2.5">
        {partners.map((name) => (
          <li
            key={name}
            className="rounded-[14px] border border-black/[0.07] bg-white px-4 py-3 text-center text-[13px] font-medium text-maum-navy"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
