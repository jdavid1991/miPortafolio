export const BotonBackStart = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed z-50 bottom-5 sm:bottom-12 right-2 2xl:right-10
                  rounded-full shadow-md
                 flex items-center justify-center
                 transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
      aria-label="Volver arriba"
    >
      <div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </div>
      <div>
        <p>UP</p>
      </div>
      </div>
    </button>
  );
};
