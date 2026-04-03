export function Footer() {
  return (
    <footer className="mt-auto border-t border-teal-100 bg-white py-6">
      <div className="container-site text-center text-xs text-ink-muted sm:text-sm">
        <p className="font-medium text-teal-800">마음으로 온(ON)</p>
        <p className="mt-1">성동구 발달장애 가족 지원 사업 · 문의는 운영기관으로 연락 주세요.</p>
        <p className="mt-2 text-[11px] opacity-80">© {new Date().getFullYear()} 마음으로 ON. All rights reserved.</p>
      </div>
    </footer>
  );
}
