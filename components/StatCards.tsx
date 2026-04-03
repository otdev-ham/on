const stats = [
  { value: "24", unit: "명", label: "대상자" },
  { value: "20", unit: "회기", label: "프로그램" },
  { value: "60", unit: "분", label: "1회기" },
];

export function StatCards() {
  return (
    <ul className="grid grid-cols-3 gap-2 sm:gap-3">
      {stats.map((s) => (
        <li
          key={s.label}
          className="rounded-xl border border-teal-100 bg-white px-2 py-2.5 text-center shadow-sm sm:px-3 sm:py-3"
        >
          <p className="text-lg font-bold tabular-nums text-teal-800 sm:text-xl">
            {s.value}
            <span className="ml-0.5 text-xs font-semibold text-teal-600 sm:text-sm">{s.unit}</span>
          </p>
          <p className="mt-0.5 text-[11px] font-medium text-ink-muted sm:text-xs">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}
