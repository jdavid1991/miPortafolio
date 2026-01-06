import { useEffect, useState } from "react";

export const BotonBackStart = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Aparece al llegar a la mitad de la pantalla
      setVisible(scrollY > viewportHeight * 1);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed z-50 bottom-5 sm:bottom-12 right-2 2xl:right-10
        rounded-full shadow-md cursor-pointer
        flex items-center justify-center
        transition-all duration-300
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }
      `}
      aria-label="Volver arriba"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
};
