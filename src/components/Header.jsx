import foto from "../assets/foto.png";

export const Header = () => {
  return (
    <header>
      <div className="h-140.25 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('./assets/Develop.jpg')] bg-fill bg-center">
        {/* nav */}
        <nav>
          <div className="container mx-auto flex justify-between items-center pt-8">
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
            <div className="text-xl text-semibold text-white flex gap-5 hover:cursor-pointer ">
              <p>Experiencia</p>
              <p>Certificaciones</p>
            </div>
          </div>
        </nav>
        {/* información */}
        <div className="container mx-auto flex pl-20 mt-20 gap-4">
          <div>
            <img src={foto} alt="foto" className="w-35.5 rounded-full" />
          </div>
          <div className="text-white ml-4 2xl:text-2xl text-xl ">
            <h1 className="2xl:text-5xl text-4xl font-bold">
              Hola, Soy Juan David
            </h1>
            <p className="mt-4 ">
              <span className="text-2xl font-semibold text-yellow-200">
                Ingeniero de sistemas
              </span>{" "}
              con +6 años de experiencia realizando soporte tecnico <br />
              en diferentes entidades del estado, de los cuales 1 año realizando
              soporte en <br />
              aplicaciones.
            </p>
            <p className="mt-4">
              Actualmente me encuentro en formación continua en el área DevOps,{" "}
              <br />
              realizando cursos y prácticas para adquirir bases sólidas en{" "}
              Docker, Kubernetes, <br /> Jenkins, Terraform y Linux, con enfoque
              en automatización e infraestructura como <br /> código..
            </p>
            <div className="mt-5 flex gap-4 text-sm font-bold ">
              <button className="text-black bg-orange-400 hover:bg-orange-500 rounded-xl px-4 py-2 hover:cursor-pointer ">
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
              </button>
              <button className="text-black bg-green-400 hover:bg-green-500 rounded-xl px-4 py-2 hover:cursor-pointer flex items-center gap-1">
                <a
                  className="rounded-xl flex items-center gap-1"
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  Contactame
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
