import projects from "../data/experiencia.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.css";

// import required modules
import { Pagination, Navigation, HashNavigation } from "swiper/modules";

export const CarouselMobile = () => {
  return (
    <>
      <Swiper
        spaceBetween={40}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} data-hash={`project-${project.id}`}>
            {/* <div className="">
              <img
                src={project.image}
                alt={project.empresa}
                className="rounded-lg"
              />
              <div className="mt-2 text-sm">
                <p>Cargo: {project.cargo}</p>
                <p>Proyecto: {project.proyecto}</p>
                <p>Tiempo Actividad: {project.tiempoActividad}</p>
              </div>
            </div> */}
            <div className="flex gap-1 " key={project.id}>
              {/* <div className="text-sm ">
                <p className="font-bold text-sm">{project.fecha}</p>
                <p>Bogota, Colombia</p>
              </div> */}
              {/* <div class="flex mt-1">
                <span class="w-2 h-2 bg-stone-400 rounded-full"></span>
                <span class="w-0.5 h-37 bg-stone-200"></span>
              </div> */}
              <div>
                <p className="text-base font-semibold">{project.cargo}</p>
                <p className="text-sm text-yellow-500 font-semibold capitalize">
                  {project.empresa} -{" "}
                  <span className="text-stone-400 text-sm">
                    ( {project.proyecto} )
                  </span>
                </p>
                {/* <ul className="list-disc mt-2 space-y-2 text-sm ">
                  <li>{project.funcion1}</li>
                  <li>{project.funcion2}</li>
                </ul> */}
                <div className="pl-1 mt-2 space-y-2 text-sm">
                  <p>{project.funcion1}</p>
                  <p>{project.funcion2}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
