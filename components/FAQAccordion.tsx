"use client";

import { useState } from "react";

type Item = { q: string; a: string };

const items: Item[] = [
  {
    q: "누가 신청할 수 있나요?",
    a: "사업 대상 기준에 해당하는 성동구 거주 발달장애 당사자 가족입니다. 세부 기준은 이용 안내 페이지를 확인해 주세요.",
  },
  {
    q: "비용이 있나요?",
    a: "사업 성격에 따라 다를 수 있습니다. 신청 시 안내되는 내용을 기준으로 합니다.",
  },
  {
    q: "OT 지원은 어떻게 하나요?",
    a: "OT 모집 페이지에서 공고 상태를 확인한 뒤, 안내에 따라 외부 신청 양식으로 지원합니다.",
  },
];

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-teal-100 rounded-2xl border border-teal-100 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="px-3 sm:px-4">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-2 py-3 text-left text-sm font-semibold text-ink sm:py-3.5 sm:text-[15px]"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span className="shrink-0 text-teal-600" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="border-t border-teal-50 pb-3 pt-2 text-[13px] leading-relaxed text-ink-muted sm:text-sm">
                {item.a}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
