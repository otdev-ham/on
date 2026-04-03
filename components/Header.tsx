"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RECRUITMENT } from "@/lib/site";

const nav = [
  { href: "/", label: "홈" },
  { href: "/about", label: "사업소개" },
  { href: "/users", label: "이용 안내" },
  { href: "/recruit", label: "OT 모집" },
  { href: "/archive", label: "아카이브" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const recruitActive = RECRUITMENT.open;

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] bg-white/95 backdrop-blur-[12px]">
      <div className="container-site flex h-14 items-center justify-between gap-2">
        <Link
          href="/"
          className="min-w-0 shrink text-[15px] font-extrabold tracking-[-0.5px] text-maum-teal-dark"
          onClick={() => setOpen(false)}
        >
          마음으로 <span className="text-maum-coral">온(ON)</span>
        </Link>

        {/* 참고 HTML: 모집 페이지 모바일에서 배지 + 지원하기 */}
        {pathname === "/recruit" && (
          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                recruitActive ? "bg-maum-teal-light text-maum-teal" : "bg-maum-gray-200 text-maum-gray-700"
              }`}
            >
              {recruitActive ? "모집 중" : "마감"}
            </span>
            <a
              href="#apply"
              className="rounded-full bg-maum-coral px-4 py-2 text-[13px] font-bold text-white"
            >
              지원하기
            </a>
          </div>
        )}

        <nav className="hidden items-center gap-1 md:flex" aria-label="주 메뉴">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-maum-teal-light text-maum-teal-dark"
                    : "text-maum-gray-700 hover:bg-maum-teal-light/60 hover:text-maum-teal-dark"
                } ${item.href === "/recruit" ? "ring-1 ring-maum-coral/50 ring-inset" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-maum-gray-200 bg-white text-maum-teal-dark md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">메뉴</span>
          {open ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-black/[0.06] bg-white md:hidden"
          aria-label="모바일 메뉴"
        >
          <div className="container-site flex flex-col py-2 pb-3">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2.5 text-[15px] font-medium ${
                    active ? "bg-maum-teal-light text-maum-teal-dark" : "text-maum-gray-900"
                  } ${item.href === "/recruit" ? "border-l-[3px] border-maum-coral pl-2.5" : ""}`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
