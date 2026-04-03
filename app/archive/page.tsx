"use client";

import { useState } from "react";

const years = [2026, 2027] as const;

type Year = (typeof years)[number];

const archiveByYear: Record<
  Year,
  { photos: { alt: string; caption: string }[]; reportUrl: string | null; reportLabel: string }
> = {
  2026: {
    photos: [
      { alt: "프로그램 활동", caption: "프로그램 현장 스냅" },
      { alt: "가족 참여", caption: "가족 참여 모습" },
    ],
    reportUrl: null,
    reportLabel: "2026 성과 보고 (준비 중)",
  },
  2027: {
    photos: [],
    reportUrl: null,
    reportLabel: "2027 성과 보고 (예정)",
  },
};

export default function ArchivePage() {
  const [year, setYear] = useState<Year>(2026);
  const data = archiveByYear[year];

  return (
    <div className="bg-white pb-11">
      <section className="py-[52px]">
        <div className="maum-narrow">
          <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-maum-teal">Archive</p>
          <h1 className="text-[21px] font-extrabold leading-snug tracking-[-0.7px] text-maum-navy">아카이브</h1>
          <p className="mb-6 mt-1.5 text-[13px] leading-relaxed text-maum-gray-500">
            연도별 활동과 성과 자료를 모읍니다.
          </p>

          <div
            className="flex flex-wrap gap-2 border-b border-maum-gray-200 pb-3"
            role="tablist"
            aria-label="연도 선택"
          >
            {years.map((y) => (
              <button
                key={y}
                type="button"
                role="tab"
                aria-selected={year === y}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
                  year === y ? "bg-maum-teal text-white shadow-sm" : "bg-maum-teal-light text-maum-teal-dark hover:bg-maum-teal-light/80"
                }`}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>

          <div className="mt-6" role="tabpanel">
            <h2 className="text-sm font-bold text-maum-navy">{year}년 활동</h2>
            {data.photos.length === 0 ? (
              <p className="mt-3 rounded-[10px] border border-dashed border-maum-gray-200 bg-maum-gray-100 p-6 text-center text-[13px] text-maum-gray-500">
                등록된 사진이 없습니다. Notion·CMS 연동 후 갱신할 수 있습니다.
              </p>
            ) : (
              <ul className="mt-3 grid grid-cols-2 gap-2">
                {data.photos.map((p) => (
                  <li
                    key={p.caption}
                    className="flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-[10px] border border-black/[0.07] bg-gradient-to-br from-maum-teal-light to-white p-3 text-center"
                  >
                    <span className="text-[10px] font-medium text-maum-teal-dark">{p.alt}</span>
                    <span className="mt-1 text-xs text-maum-navy">{p.caption}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-6 rounded-[14px] border border-black/[0.07] bg-maum-gray-100 p-5">
              <h3 className="text-sm font-bold text-maum-navy">성과 보고</h3>
              {data.reportUrl ? (
                <a
                  href={data.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex text-[13px] font-semibold text-maum-teal-dark underline-offset-2 hover:underline"
                >
                  {data.reportLabel} ↗
                </a>
              ) : (
                <p className="mt-2 text-[13px] text-maum-gray-700">{data.reportLabel}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
