import projects from "../data/experiencia.json";
import { CarouselMobile } from "./CarouselMobile";
import { Fade } from "react-awesome-reveal";

const BriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
    />
  </svg>
);

export const Experiencia = () => {
  return (
    <section>
      {/* Desktop */}
      <div className="bg-slate-950 pb-16">
        <div className="hidden sm:flex flex-col container mx-auto px-8">
          <Fade delay={100}>
            <div className="flex text-white pt-12 2xl:text-2xl text-xl gap-2 items-center font-bold">
              <BriefcaseIcon />
              <h2>Experiencia Laboral</h2>
            </div>
          </Fade>

          <div className="mt-12">
            {projects.map((project) => (
              <Fade
                key={project.id}
                delay={100}
                direction="left"
                cascade
                damping={0.1}
              >
                <div className="flex gap-10 mb-10">
                  {/* Fecha */}
                  <div className="w-64 shrink-0 text-right pt-1">
                    <p className="font-bold text-base text-stone-100">
                      {project.fecha}
                    </p>
                    <p className="text-stone-400 text-sm mt-1">
                      Bogotá, Colombia
                    </p>
                    <span className="inline-block mt-2 px-2 py-0.5 rounded text-xs bg-slate-800 text-stone-300 border border-slate-600">
                      {project.tiempoActividad}
                    </span>
                  </div>

                  {/* Contenido */}
                  <div className="flex-1 bg-slate-900/50 border border-slate-700/50 rounded-xl p-5 hover:border-slate-600 transition-colors">
                    <p className="text-lg font-semibold text-white">
                      {project.cargo}
                    </p>
                    <p className="text-sm text-yellow-400 font-semibold capitalize mt-1">
                      {project.empresa}
                      <span className="text-stone-400 font-normal">
                        {" - "}
                        {project.proyecto}
                      </span>
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm 2xl:text-base text-stone-300">
                      <li>{project.funcion1}</li>
                      <li>{project.funcion2}</li>
                    </ul>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden bg-[#020617] px-4 pb-10">
        <div className="flex text-white pt-6 text-xl gap-2 items-center font-bold">
          <BriefcaseIcon />
          <h2>Experiencia Laboral</h2>
        </div>
        <div className="mt-4">
          <CarouselMobile />
        </div>
      </div>
    </section>
  );
};
