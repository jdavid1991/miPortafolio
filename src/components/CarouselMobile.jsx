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
            <div className="">
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
