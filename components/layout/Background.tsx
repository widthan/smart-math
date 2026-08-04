export default function Background() {
  return (
    <>
      <div className="fixed inset-0 -z-50 overflow-hidden bg-white">

        <div className="absolute left-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-pink-300/25 blur-[120px]" />

        <div className="absolute right-[-150px] top-[120px] h-[450px] w-[450px] rounded-full bg-violet-300/25 blur-[120px]" />

        <div className="absolute bottom-[-180px] left-[20%] h-[550px] w-[550px] rounded-full bg-cyan-300/20 blur-[140px]" />

        <svg
          className="absolute inset-0 h-full w-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0H0V40"
                fill="none"
                stroke="black"
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

      </div>
    </>
  );
}
