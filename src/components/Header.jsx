import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

import "animate.css";
import foto from "/assets/foto.png";

const navLinks = [
  { href: "#proyectos", label: "Proyectos" },
  { href: "#badges", label: "Badges" },
  { href: "#certificaciones", label: "Certificaciones" },
];

const GitHubIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header>
      {/* Sticky nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/85 backdrop-blur-md shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo */}
          <a href="#" aria-label="Inicio">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={48}
              height={48}
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-[#B5FF33]"
            >
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0m2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0" />
            </svg>
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-6 2xl:text-xl text-base text-stone-200 font-semibold">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="hover:text-white hover:underline underline-offset-4 decoration-green-400 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="https://github.com/jdavid1991"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-david-ramirez-rodriguez/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-300 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-stone-300 hover:text-white transition-colors"
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="sm:hidden bg-black/95 backdrop-blur-md border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-stone-200 font-semibold hover:text-white hover:underline underline-offset-4 decoration-green-400 transition-colors py-1"
              >
                {label}
              </a>
            ))}
            <div className="flex gap-5 pt-3 border-t border-white/10">
              <a
                href="https://github.com/jdavid1991"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-david-ramirez-rodriguez/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-300 hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <Fade>
        <div className="flex items-center justify-center w-full flex-col bg-[#0F172A]">
          <div className="container mx-auto flex flex-col items-center justify-center pt-32 sm:pt-24 pb-16 px-4 text-center 2xl:mt-10">
            {/* Foto con glow */}
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-green-400 to-lime-300 blur-md opacity-50 scale-110" />
              <img
                src={foto}
                alt="Juan David R. - Ingeniero DevOps"
                className="relative 2xl:w-44 w-36 rounded-full ring-2 ring-green-400/60"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* Nombre */}
            <h1 className="2xl:text-7xl sm:text-6xl text-3xl font-bold text-white mt-5">
              <TypeAnimation
                sequence={[600, "Hola, soy Juan David", 2000, "", 500]}
                speed={40}
                deletionSpeed={60}
                repeat={Infinity}
              />
            </h1>

            {/* Badges de rol */}
            <div className="2xl:mt-15 mt-8 flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-400/10 text-green-400 border border-green-400/30">
                DevOps
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-400/10 text-orange-400 border border-orange-400/30">
                AWS Cloud Practitioner
              </span>
              <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-400/10 text-red-400 border border-red-400/30">
                ITIL 4 Foundation
              </span>
            </div>

            {/* Descripción */}
            <div className="mt-8 text-stone-300 sm:leading-relaxed font-medium max-w-5xl 2xl:text-xl text-lg">
              <p>
                <span className="sm:text-3xl text-xl font-bold text-yellow-200">
                  Ingeniero de sistemas
                </span>{" "}
                con +6 años de experiencia gestionando la disponibilidad y
                estabilidad de plataformas empresariales críticas. Trayectoria
                sólida que abarca soporte en sitio, atención de incidentes
                complejos (L2) y aseguramiento de calidad (QA). Especialista en
                el análisis profundo de logs y resolución de fallas operativas.
                Actualmente me desempeño como Ingeniero DevOps Jr., garantizando
                la continuidad y alineación entre ambientes de desarrollo y
                producción.
              </p>
              {/* <p className="mt-">
                Cuento con experiencia en soporte y pruebas funcionales de
                aplicaciones, participando en ambientes de producción y
                preproducción, con énfasis en revisión de logs, detección de
                fallas operativas y prácticas DevOps a nivel operativo.
              </p> */}
            </div>

            {/* Botones CTA */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-stone-900 text-white text-base w-44 py-3 rounded-full outline-2 outline-green-400 outline-offset-1 transition-transform active:scale-95 animate__animated animate__pulse animate__infinite animate__fast"
              >
                <svg
                  viewBox="0 0 360 362"
                  width="20"
                  height="20"
                  aria-hidden="true"
                >
                  <path
                    fill="#25D366"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                  />
                </svg>
                <span>Contáctame</span>
              </a>

              <a
                href="https://github.com/jdavid1991"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-stone-900 text-white text-base w-44 py-3 rounded-full outline-2 outline-white/30 outline-offset-1 transition-all hover:outline-white/70 active:scale-95"
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </header>
  );
};
