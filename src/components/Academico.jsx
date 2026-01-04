import Carousel from "./Carousel";
import { Fade } from "react-awesome-reveal";

export const Academico = () => {
  return (
    <section>
      <div className="bg-[#0F172A]">
        <Fade delay={300}>
          <div className="container mx-auto">
            <div
              id="certificaciones"
              className=" flex text-white sm:pt-10 pt-8 2xl:text-2xl text-xl gap-2 items-center font-bold sm:ml-7 sm:p-0 p-2"
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
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              <h2>Certificaciones Académicas</h2>
            </div>
          </div>
          <div className="sm:mt-12 2xl:mt-15 mt-7 w-[95%] mx-auto">
            <Carousel />
          </div>
        </Fade>
      </div>
    </section>
  );
};
