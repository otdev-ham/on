"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 border-b border-teal-100/80 bg-paper/95 backdrop-blur-md">
      <div className="container-site flex h-12 items-center justify-between gap-3 sm:h-14">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight text-teal-800 sm:text-base"
          onClick={() => setOpen(false)}
        >
          마음으로 <span className="text-teal-600">ON</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="주 메뉴">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-teal-100 text-teal-800"
                    : "text-ink-muted hover:bg-teal-50 hover:text-teal-800"
                } ${item.href === "/recruit" ? "ring-1 ring-coral-300/70 ring-inset" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-teal-200 bg-white text-teal-800 md:hidden"
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
          className="border-t border-teal-100 bg-paper md:hidden"
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
                    active ? "bg-teal-100 text-teal-800" : "text-ink"
                  } ${item.href === "/recruit" ? "border-l-[3px] border-coral-400 pl-2.5" : ""}`}
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
