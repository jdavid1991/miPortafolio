import foto from "/assets/foto.png";

export const Header = () => {
  
  return (
    <header>
      <div className="2xl:h-160.25 sm:h-145.25 h-148 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.9)),url('/assets/Develop.webp')] bg-fill bg-center">
        {/* nav */}
        <nav>
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
            <div className="hidden text-xl font-semibold text-stone-200 hover:text-white sm:flex gap-5 hover:cursor-pointer ">
              {/* <a href="">
                <p>Experiencia</p>
              </a> */}
              <a
                className="hover:underline underline-offset-4 decoration-green-400"
                href="#certificaciones"
              >
                Certificaciones
              </a>
            </div>
          </div>
        </nav>
        {/* información */}
        <div className="hidden container mx-auto sm:flex pl-20 mt-20 gap-4">
          <div>
            <img
              src={foto}
              alt="foto"
              className="w-35.5 rounded-full"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className="text-white ml-4 2xl:text-2xl text-xl ">
            <h1 className="2xl:text-5xl text-4xl font-bold">
              Hola, Soy Juan David
            </h1>
            <p className="mt-4 text-stone-200">
              <span className="text-2xl font-semibold text-yellow-200">
                Ingeniero de sistemas
              </span>{" "}
              con +6 años de experiencia realizando soporte tecnico <br />
              en diferentes entidades del estado, de los cuales 1 año realizando
              soporte en <br />
              aplicaciones.
            </p>
            <p className="mt-4 text-stone-200">
              Actualmente me encuentro en formación continua en el área DevOps,{" "}
              <br />
              realizando cursos y prácticas para adquirir bases sólidas en{" "}
              Docker, Kubernetes, <br /> Jenkins, Terraform y Linux, con enfoque
              en automatización e infraestructura como <br /> código.
            </p>
            <div className="mt-9 flex gap-4 text-sm font-bold ">
              {/* <button className="text-black bg-orange-500 hover:bg-orange-400 rounded-xl px-4 py-2 hover:cursor-pointer ">
                <a
                  className="rounded-xl flex items-center gap-1"
                  href="/hv-JuanDavidRamirez.pdf"
                  download
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                  Descargar CV
                </a>
              </button> */}
              <button className="text-white bg-gray-900 hover:bg-gray-800 rounded-md px-4 py-1 hover:cursor-pointer flex items-center outline-2 outline-offset-2 outline-green-400">
                <a
                  className="rounded-xl flex items-center gap-2 text-base"
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 360 362" width="20" height="20">
                    <path
                      fill="#25D366"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                    />
                  </svg>
                  Contáctame
                </a>
              </button>
            </div>
          </div>
        </div>

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
              con +6 años de experiencia realizando soporte tecnico en
              diferentes entidades del estado, de los cuales 1 año realizando
              soporte en aplicaciones.
            </p>
            <p className="mt-4 text-stone-200">
              Actualmente me encuentro en formación continua en el área DevOps,
              realizando cursos y prácticas para adquirir bases sólidas en
              Docker, Kubernetes, Jenkins, Terraform y Linux, con enfoque en
              automatización e infraestructura como código.
            </p>
          </div>
          <div className="mt-7 flex gap-4 text-sm font-bold justify-center ">
            {/* <button className="text-black bg-orange-400 hover:bg-orange-500 rounded-xl px-4 py-2 hover:cursor-pointer ">
              <a
                className="rounded-xl flex items-center gap-1"
                href="/hv-JuanDavidRamirez.pdf"
                download
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Descargar CV
              </a>
            </button> */}

            <button className="text-white bg-gray-900 hover:bg-gray-700 rounded-md px-4 py-1 hover:cursor-pointer flex items-center outline-2 outline-offset-2 outline-green-400">
              <a
                className="rounded-xl flex items-center gap-2 text-base"
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 360 362" width="20" height="20">
                  <path
                    fill="#25D366"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M307.546 52.566C273.709 18.684 228.706.017 180.756 0 81.951 0 1.538 80.404 1.504 179.235c-.017 31.594 8.242 62.432 23.928 89.609L0 361.736l95.024-24.925c26.179 14.285 55.659 21.805 85.655 21.814h.077c98.788 0 179.21-80.413 179.244-179.244.017-47.898-18.608-92.926-52.454-126.807v-.008Zm-126.79 275.788h-.06c-26.73-.008-52.952-7.194-75.831-20.765l-5.44-3.231-56.391 14.791 15.05-54.981-3.542-5.638c-14.912-23.721-22.793-51.139-22.776-79.286.035-82.14 66.867-148.973 149.051-148.973 39.793.017 77.198 15.53 105.328 43.695 28.131 28.157 43.61 65.596 43.593 105.398-.035 82.149-66.867 148.982-148.982 148.982v.008Zm81.719-111.577c-4.478-2.243-26.497-13.073-30.606-14.568-4.108-1.496-7.09-2.243-10.073 2.243-2.982 4.487-11.568 14.577-14.181 17.559-2.613 2.991-5.226 3.361-9.704 1.117-4.477-2.243-18.908-6.97-36.02-22.226-13.313-11.878-22.304-26.54-24.916-31.027-2.613-4.486-.275-6.91 1.959-9.136 2.011-2.011 4.478-5.234 6.721-7.847 2.244-2.613 2.983-4.486 4.478-7.469 1.496-2.991.748-5.603-.369-7.847-1.118-2.243-10.073-24.289-13.812-33.253-3.636-8.732-7.331-7.546-10.073-7.692-2.613-.13-5.595-.155-8.586-.155-2.991 0-7.839 1.118-11.947 5.604-4.108 4.486-15.677 15.324-15.677 37.361s16.047 43.344 18.29 46.335c2.243 2.991 31.585 48.225 76.51 67.632 10.684 4.615 19.029 7.374 25.535 9.437 10.727 3.412 20.49 2.931 28.208 1.779 8.604-1.289 26.498-10.838 30.228-21.298 3.73-10.46 3.73-19.433 2.613-21.298-1.117-1.865-4.108-2.991-8.586-5.234l.008-.017Z"
                  />
                </svg>
                Contáctame
              </a>
            </button>
          </div>
        </div>
        {/* MOBILE */}
      </div>
    </header>
  );
};
