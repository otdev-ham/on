const partners = [
  "성동구장애인가족지원센터",
  "서울시작업치료사회",
  "별별생활체육센터",
];

export function PartnerBar() {
  return (
    <section className="rounded-2xl border border-teal-100 bg-white/80 px-3 py-3 sm:px-4 sm:py-4">
      <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-wider text-teal-700/80 sm:text-xs">
        협력 · 파트너
      </p>
      <ul className="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-4 sm:gap-y-1">
        {partners.map((name) => (
          <li
            key={name}
            className="rounded-lg bg-teal-50 px-2.5 py-1.5 text-center text-[11px] font-medium text-teal-900 sm:text-xs"
          >
            {name}
          </li>
        ))}
      </ul>
    </section>
  );
}
