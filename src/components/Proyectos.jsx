import proyectos from "../data/proyectos.json";
import { Fade } from "react-awesome-reveal";

export const Proyectos = () => {
  return (
    <section>
      <div className="pb-6 bg-[#0F172A]">
        <Fade delay={200}>
          <div className="">
            <div className="container mx-auto">
              <div
                id="proyectos"
                className="flex text-white sm:pt-12 pt-5 2xl:text-2xl text-xl gap-2 items-center font-bold sm:ml-8 sm:p-0 p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                  />
                </svg>
                <h2>Proyectos</h2>
              </div>
            </div>

            <div className="2xl:grid 2xl:grid-cols-2 sm:grid sm:grid-cols-2 justify-items-center sm:mt-10 mt-5 space-y-9">
              {/* card */}
              {proyectos.map((proyecto) => (
                <div className="2xl:flex gap-3 ">
                  <div
                    className="2xl:w-100 2xl:h-80 sm:w-150 w-100 h-100 flex justify-center items-center rounded-xl"
                    style={{ backgroundColor: proyecto.bg }}
                  >
                    <img
                      className="2xl:w-85 sm:w-125 w-80 2xl:h-55  h-75 mask-b-from-50% mask-b-to-100%"
                      src={proyecto.image}
                      alt={proyecto.titulo}
                    />
                  </div>
                  <div className="2xl:mt-6 mt-4 ml-3">
                    <h3 className="2xl:text-2xl text-xl capitalize font-semibold">
                      {proyecto.titulo}
                    </h3>
                    <div className="flex items-center gap-2 text-sm mt-4">
                      <div className="flex items-center gap-2 bg-indigo-900 px-3 py-0.5 rounded-full">
                        <img
                          className="w-4"
                          src={proyecto.tecnologia1}
                          alt=""
                        />
                        <p>{proyecto.tecnologiaNombre1}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-indigo-900 px-3 py-0.5 rounded-full">
                        <img
                          className="w-4"
                          src={proyecto.tecnologia2}
                          alt=""
                        />
                        <p>{proyecto.tecnologiaNombre2}</p>
                      </div>
                    </div>

                    <p className="2xl:w-120 sm:w-xl mt-4 text-stone-300 2xl:text-base text-sm">
                      {proyecto.descripcion}
                    </p>

                    <a
                      href={proyecto.codeGitHubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="flex items-center justify-center gap-2 bg-black px-4 py-1 text-base rounded-full mt-4 w-30 outline-1 outline-offset-1 outline-white">
                        <svg
                          className="w-5"
                          viewBox="0 0 1024 1024"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                            transform="scale(64)"
                            fill="#ffff"
                          />
                        </svg>
                        <p>Code</p>
                      </div>
                    </a>
                  </div>
                </div>
              ))}
              {/* card */}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};
