export function Footer() {
  return (
    <footer className="mt-auto border-t border-teal-100 bg-white py-6">
      <div className="container-site text-center text-xs text-ink-muted sm:text-sm">
        <p className="font-medium text-teal-800">마음으로 온(ON)</p>
        <p className="mt-1">
          성동구장애가족지원센터 · 서울특별시작업치료사회
          <br />
          협력기관: 별별생활체육센터 · OT 모집 담당: 박새롬 이사
        </p>
        <p className="mt-2 text-[11px] opacity-80">© {new Date().getFullYear()} 마음으로 ON. All rights reserved.</p>
      </div>
    </footer>
  );
}
