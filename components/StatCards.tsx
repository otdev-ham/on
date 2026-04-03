const stats = [
  { value: "24", unit: "명", label: "대상자" },
  { value: "20", unit: "회기", label: "프로그램" },
  { value: "60", unit: "분", label: "1회기" },
];

/** 참고 HTML `.stat-strip` / `.stat-card` 와 동일 스타일 */
export function StatCards() {
  return (
    <ul className="grid grid-cols-3 gap-2">
      {stats.map((s) => (
        <li
          key={s.label}
          className="rounded-[10px] bg-maum-gray-100 px-2.5 py-4 text-center"
        >
          <p className="text-2xl font-extrabold leading-none tracking-tight text-maum-teal-dark">
            {s.value}
            <sub className="align-baseline text-[13px] font-semibold">{s.unit}</sub>
          </p>
          <p className="mt-1 text-[11px] font-medium leading-snug text-maum-gray-500">{s.label}</p>
        </li>
      ))}
    </ul>
  );
}
