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

/** 참고 HTML `.faq-item` 스타일 */
export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="overflow-hidden rounded-[10px] border border-black/[0.07]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-2.5 px-4 py-[15px] text-left text-[13px] font-semibold tracking-tight text-maum-navy"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span
                className={`shrink-0 text-base not-italic text-maum-teal transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              >
                ↓
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-4 pb-3.5 text-xs leading-[1.75] text-maum-gray-700">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
