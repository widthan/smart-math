export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden bg-[#F7FAFD]">

      {/* Мягкое голубое свечение слева сверху */}
      <div className="absolute left-[-220px] top-[-180px] h-[520px] w-[520px] rounded-full bg-[#7DB7E8]/20 blur-[140px]" />

      {/* Основное синее свечение справа */}
      <div className="absolute right-[-180px] top-[100px] h-[520px] w-[520px] rounded-full bg-[#18508F]/10 blur-[150px]" />

      {/* Лёгкое холодное свечение снизу */}
      <div className="absolute bottom-[-220px] left-[25%] h-[600px] w-[600px] rounded-full bg-[#4F9BD5]/10 blur-[170px]" />

      {/* Очень тонкая сетка */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.025]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M48 0H0V48"
              fill="none"
              stroke="#0F3B6D"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
        />
      </svg>

      {/* Едва заметная диагональная подсветка */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.9),transparent_45%)]" />

    </div>
  );
}