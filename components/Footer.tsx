import { SEOUL_OT_INSTAGRAM_URL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-maum-gray-200 bg-maum-gray-100 py-7">
      <div className="maum-narrow text-center">
        <p className="text-[15px] font-extrabold tracking-[-0.5px] text-maum-teal-dark">
          마음으로 온(ON)
        </p>
        <p className="mt-1.5 text-[11px] leading-[1.8] text-maum-gray-500">
          성동구장애가족지원센터 · 서울특별시작업치료사회
          <br />
          협력기관: 별별생활체육센터 · OT 모집 담당: 박새롬 이사
        </p>
        <p className="mt-3 text-[11px] text-maum-gray-500">
          문의:{" "}
          <a
            href={SEOUL_OT_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-maum-teal-dark underline-offset-2 hover:underline"
          >
            인스타그램 @kaot.seoul
          </a>
        </p>
        <p className="mt-2 text-[11px] text-maum-gray-500/90">© {new Date().getFullYear()} 마음으로 ON.</p>
      </div>
    </footer>
  );
}
