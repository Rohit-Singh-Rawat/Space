const page = () => {
  return (
    <section className="pb-16 pt-8 md:mt-8 lg:mt-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-center font-neu text-5xl font-semibold tracking-tight">
          Projects
        </h1>
        <h2 className="mt-3 text-center font-neu text-gray-400">
          Projects I&apos;ve crafted.
        </h2>
        <svg
          width="400"
          height="80"
          viewBox="0 0 200 40"
          className="-translate-x-20 -translate-y-12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#9400D3" stopOpacity="0" />
              <stop offset="100%" stopColor="#4B0082" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <path
            d="M10 20 L 70 20 L 90 30 H 200"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  )
}
export default page
