import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";
import { BackgroundPaths } from "@/components/ui/background-paths";
import "animate.css";
import foto from "/assets/foto.png";

export const Header = () => {
  return (
    <header>
      <BackgroundPaths className="bg-black w-full min-h-screen">
        <Fade>
          <div className="">
            {/* nav */}
            <nav>
              <Slide direction="down">
                <div className="container mx-auto flex justify-between items-center pt-8 p-2">
                  <div>
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
                  </div>
                  <div className="hidden 2xl:text-xl text-stone-200 text-base font-semibold  sm:flex gap-5 hover:cursor-pointer ">
                    <a
                      className="hover:text-white hover:underline underline-offset-4 decoration-green-400 "
                      href="#proyectos"
                    >
                      Proyectos
                    </a>
                    <a
                      className="hover:text-white hover:underline underline-offset-4 decoration-green-400 "
                      href="#badges"
                    >
                      Badges
                    </a>
                    <a
                      className="hover:text-white hover:underline underline-offset-4 decoration-green-400 "
                      href="#certificaciones"
                    >
                      Certificaciones
                    </a>
                  </div>
                </div>
              </Slide>
            </nav>
            {/* nav */}

            {/* información */}
            <div className="hidden container mx-auto sm:flex 2xl:w-[74%] w-[82%] 2xl:mt-40 mt-25 gap-4">
              <div>
                <img
                  src={foto}
                  alt="foto"
                  className="2xl:w-30.5 w-25.5 rounded-full"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <div className="text-white 2xl:text-2xl text-xl 2xl:w-300 w-245 ">
                <h1 className="2xl:text-5xl text-4xl font-bold">
                  <TypeAnimation
                    sequence={[1000, "Hola,", 600, "Hola, soy Juan David"]}
                    speed={40}
                    repeat={Infinity}
                  />
                </h1>
                <p className="mt-4 text-stone-200">
                  <span className="text-2xl font-semibold text-yellow-200">
                    Ingeniero de sistemas
                  </span>{" "}
                  con +6 años de experiencia en IT, especializado en soporte
                  técnico (nivel I y II), configuración de hardware y software,
                  telefonía IP, migración de equipos, respaldo de datos y
                  administración de impresoras, así como configuración de
                  Microsoft 365 (Outlook, SharePoint, OneDrive).
                </p>
                <p className="mt-4 text-stone-200">
                  1 año de experiencia realizando soporte y pruebas funcionales
                  de aplicaciones, enfocado en asegurar la calidad y continuidad
                  operativa del sistema, revisión de logs para la identificación
                  de fallas en procesos en ambientes de producción y
                  preproducción.
                </p>
                <p className="mt-4 text-stone-200">
                  Actualmente me encuentro en formación continua en el área
                  DevOps, realizando cursos y prácticas para adquirir bases
                  sólidas en Docker, Kubernetes, Jenkins, Terraform y Linux, con
                  enfoque en automatización e infraestructura como código.
                </p>
                <button className="flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-11">
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    w-40 py-3
                    flex items-center justify-center gap-2
                    text-base text-white
                    rounded-full
                    outline-2 outline-green-400 outline-offset-1
                    transition-transform
                    active:scale-95
                    animate__animated animate__pulse animate__infinite animate__fast"
                  >
                    <svg viewBox="0 0 360 362" width="20" height="20">
                      <path
                        fill="#25D366"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                      />
                    </svg>
                    <span>Contáctame</span>
                  </a>
                </button>
              </div>
            </div>
            {/* información */}

            {/* MOBILE */}
            <div className="sm:hidden">
              <div className="container mx-auto flex justify-center mt-6">
                <img
                  src={foto}
                  alt="foto"
                  className="w-25.5 rounded-full"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
              <div className="p-2 mt-4 ">
                <h1 className="text-4xl text-white text-center font-bold">
                  Hola, Soy Juan David
                </h1>
                <p className="mt-5 text-stone-200">
                  <span className="text-xl font-semibold text-yellow-200">
                    Ingeniero de sistemas
                  </span>{" "}
                  con +6 años de experiencia en IT, especializado en soporte
                  técnico (nivel I y II), configuración de hardware y software,
                  telefonía IP, migración de equipos, respaldo de datos y
                  administración de impresoras, así como configuración de
                  Microsoft 365 (Outlook, SharePoint, OneDrive).
                </p>
                <p className="mt-4 text-stone-200">
                  1 año de experiencia realizando soporte y pruebas funcionales
                  de aplicaciones, enfocado en asegurar la calidad y continuidad
                  operativa del sistema, revisión de logs para la identificación
                  de fallas en procesos en ambientes de producción y
                  preproducción.
                </p>
                <p className="mt-4 text-stone-200">
                  Actualmente me encuentro en formación continua en el área
                  DevOps, realizando cursos y prácticas para adquirir bases
                  sólidas en Docker, Kubernetes, Jenkins, Terraform y Linux, con
                  enfoque en automatización e infraestructura como código.
                </p>
              </div>
              <div className="mt-7 flex gap-4 text-sm font-bold justify-center ">
                <button className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
                  <a
                    href="https://wa.me/573001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    w-40 py-3
                    flex items-center justify-center gap-2
                    text-base text-white
                    rounded-full
                    outline-2 outline-green-400 outline-offset-1
                    transition-transform
                    active:scale-95
                    animate__animated animate__pulse animate__infinite animate__fast"
                  >
                    <svg viewBox="0 0 360 362" width="20" height="20">
                      <path
                        fill="#25D366"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                      />
                    </svg>
                    <span>Contáctame</span>
                  </a>
                </button>
              </div>
            </div>
            {/* MOBILE */}
          </div>
        </Fade>
      </BackgroundPaths>
    </header>
  );
};
