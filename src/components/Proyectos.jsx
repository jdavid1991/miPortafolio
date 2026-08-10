import proyectos from "../data/proyectos.json";
import { Fade } from "react-awesome-reveal";

export const Proyectos = () => {
  return (
    <section>
      <div className="2xl:pb-16 pb-8 bg-slate-900">
        <Fade delay={200}>
          <div className="container mx-auto px-4">
            <div
              id="proyectos"
              className="flex text-white sm:pt-14 pt-8 2xl:text-2xl text-xl gap-2 items-center font-bold sm:pl-4"
            >
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
                  d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                />
              </svg>
              <h2>Proyectos</h2>
            </div>
          </div>

          <div className="container mx-auto sm:mt-10 mt-6 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  mx-auto">
              {proyectos.map((proyecto) => (
                <div
                  key={proyecto.titulo}
                  className="flex flex-col rounded-2xl border border-white/10 bg-slate-800/60 hover:border-white/25 transition-colors overflow-hidden"
                >
                  {/* Imagen */}
                  <div className="overflow-hidden">
                    <img
                      src={proyecto.image}
                      alt={proyecto.titulo}
                      className="w-full h-44 object-cover"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-col justify-between flex-1 p-4">
                    <div>
                      <h3 className="text-base font-semibold text-white capitalize leading-tight">
                        {proyecto.titulo}
                      </h3>
                      <p className="mt-2 text-stone-400 text-sm leading-relaxed line-clamp-3 hover:line-clamp-none cursor-text">
                        {proyecto.descripcion}
                      </p>

                      {/* Tecnologías */}
                      <div className="flex flex-wrap gap-2 mt-3">
                        <div className="flex items-center gap-1.5 bg-indigo-900/70 border border-indigo-700/50 px-2.5 py-1 rounded-full text-xs">
                          <img
                            className="w-3.5 h-3.5"
                            src={proyecto.tecnologia1}
                            alt=""
                          />
                          <span>{proyecto.tecnologiaNombre1}</span>
                        </div>
                        <div className="flex items-center gap-1.5 bg-indigo-900/70 border border-indigo-700/50 px-2.5 py-1 rounded-full text-xs">
                          <img
                            className="w-3.5 h-3.5"
                            src={proyecto.tecnologia2}
                            alt=""
                          />
                          <span>{proyecto.tecnologiaNombre2}</span>
                        </div>
                      </div>
                    </div>

                    {/* Botón */}
                    <a
                      href={proyecto.codeGitHubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 w-fit flex items-center gap-2 bg-black/60 border border-white/20 hover:border-white/60 px-4 py-2 text-xs rounded-lg transition-all hover:scale-105 active:scale-95"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      <span>Ver código</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
