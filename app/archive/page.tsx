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
    <div className="container-site py-6 pb-12 sm:py-10">
      <h1 className="text-xl font-bold text-teal-900 sm:text-2xl">아카이브</h1>
      <p className="mt-2 text-sm text-ink-muted sm:text-base">연도별 활동과 성과 자료를 모읍니다.</p>

      <div
        className="mt-6 flex flex-wrap gap-2 border-b border-teal-100 pb-3"
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
              year === y
                ? "bg-teal-700 text-white shadow-sm"
                : "bg-teal-50 text-teal-800 hover:bg-teal-100"
            }`}
            onClick={() => setYear(y)}
          >
            {y}
          </button>
        ))}
      </div>

      <section className="mt-6" role="tabpanel">
        <h2 className="text-base font-bold text-teal-800 sm:text-lg">{year}년 활동</h2>
        {data.photos.length === 0 ? (
          <p className="mt-3 rounded-2xl border border-dashed border-teal-200 bg-teal-50/40 p-6 text-center text-sm text-ink-muted">
            등록된 사진이 없습니다. Notion·CMS 연동 후 갱신할 수 있습니다.
          </p>
        ) : (
          <ul className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {data.photos.map((p) => (
              <li
                key={p.caption}
                className="overflow-hidden rounded-xl border border-teal-100 bg-gradient-to-br from-teal-100 to-teal-50 aspect-[4/3]"
              >
                <div className="flex h-full flex-col items-center justify-center p-3 text-center">
                  <span className="text-[10px] font-medium text-teal-700">{p.alt}</span>
                  <span className="mt-1 text-xs text-teal-900">{p.caption}</span>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 rounded-2xl border border-teal-100 bg-white p-4 shadow-sm sm:p-5">
          <h3 className="text-sm font-bold text-teal-800 sm:text-base">성과 보고</h3>
          {data.reportUrl ? (
            <a
              href={data.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-sm font-semibold text-teal-700 underline-offset-2 hover:underline"
            >
              {data.reportLabel} ↗
            </a>
          ) : (
            <p className="mt-2 text-sm text-ink-muted">{data.reportLabel}</p>
          )}
        </div>
      </section>
    </div>
  );
}
