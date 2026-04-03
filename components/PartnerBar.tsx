import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/partners";

export function PartnerBar() {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-5">
      <p className="mb-6 text-center text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">
        협력 · 파트너
      </p>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {PARTNER_LOGOS.map((p) => (
          <li
            key={p.id}
            className={
              p.captionBelow && p.src
                ? "flex items-stretch justify-center p-0 sm:p-1"
                : p.src
                  ? "flex min-h-[140px] flex-col items-center justify-center rounded-[14px] border border-black/[0.07] bg-white px-4 py-6 shadow-sm"
                  : "flex items-stretch justify-center p-0 sm:p-1"
            }
          >
            {p.captionBelow && p.src ? (
              <div
                className="flex w-full flex-col items-center justify-center rounded-3xl border-2 border-maum-teal bg-gradient-to-b from-white to-maum-teal-light/80 px-4 py-6 text-center shadow-[0_2px_12px_rgba(42,157,143,0.12)]"
                role="group"
                aria-label={p.name}
              >
                <div className="relative h-[72px] w-full max-w-[260px] sm:h-20">
                  <Image
                    src={p.src}
                    alt={p.alt ?? p.name}
                    fill
                    className="object-contain object-center"
                    sizes="260px"
                  />
                </div>
                <p className="mt-3 text-[15px] font-extrabold leading-snug tracking-tight text-maum-teal-dark sm:text-[16px]">
                  {p.captionBelow}
                </p>
                <p className="mt-2 text-[11px] font-bold tracking-wide text-maum-teal">협력기관</p>
              </div>
            ) : p.src ? (
              <div className="relative h-32 w-full max-w-[280px] sm:h-36">
                <Image
                  src={p.src}
                  alt={p.alt ?? p.name}
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
            ) : (
              <div
                className="flex w-full flex-col items-center justify-center rounded-3xl border-2 border-maum-teal bg-gradient-to-b from-white to-maum-teal-light/80 px-5 py-7 text-center shadow-[0_2px_12px_rgba(42,157,143,0.12)]"
                role="group"
                aria-label={p.name}
              >
                <p className="text-[16px] font-extrabold leading-snug tracking-tight text-maum-teal-dark sm:text-[17px]">
                  {p.shortLabel}
                </p>
                <p className="mt-2 text-[11px] font-bold tracking-wide text-maum-teal">협력기관</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
