"use client";

import { useState } from "react";

const items = [
  {
    q: "협회 회원이 아니어도 지원 가능한가요?",
    a: "서울특별시작업치료사회 협회 회원이어야 지원 가능합니다. 방문 작업치료 경험이 있거나, 지역사회 기반 OT에 관심 있는 분이라면 지원하실 수 있습니다.",
  },
  {
    q: "ICF 기록을 잘 모르는데 괜찮나요?",
    a: "오리엔테이션을 통해 ICF/작업기반 기록 양식 교육이 제공됩니다. 슈퍼바이저 치료사와 함께 상호보완하며 작성할 수 있으니 처음이어도 괜찮습니다.",
  },
  {
    q: "수집된 개인정보는 어떻게 쓰이나요?",
    a: "수집 항목(이름, 소속, 임상경력, 이메일, 연락처)은 사업 신청·안내·진행 목적으로만 사용됩니다. 지역사회 OT 기록은 연구 목적으로 활용될 수 있으며, 동의하지 않으시면 신청이 어렵습니다.",
  },
  {
    q: "사례회의는 얼마나 자주 진행되나요?",
    a: "정기적으로 진행되며 구체적인 일정은 오리엔테이션 시 안내됩니다. 참여 작업치료사 간 교류와 슈퍼비전이 함께 이루어집니다.",
  },
];

export function RecruitFaq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className="overflow-hidden rounded-[10px] border border-black/[0.07]"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-2.5 px-4 py-3.5 text-left text-[13px] font-semibold tracking-tight text-maum-navy"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <span
                className={`shrink-0 text-base text-maum-teal transition-transform ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              >
                ↓
              </span>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-4 pb-3.5 text-xs leading-relaxed text-maum-gray-700">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
