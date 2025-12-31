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
            <div className="flex gap-1 " key={project.id}>
              <div>
                <p className="text-base font-semibold">{project.cargo}</p>
                <p className="text-sm text-yellow-500 font-semibold capitalize">
                  {project.empresa} -{" "}
                  <span className="text-stone-400 text-sm">
                    ( {project.proyecto} )
                  </span>
                </p>
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
