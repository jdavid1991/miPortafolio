import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import backend from "/assets/backend.png";
import fullstack from "/assets/fullstack.png";
import java from "/assets/java.png";
import linux from "/assets/linux.webp";


export default function Carousel() {
  const slides = [backend, fullstack, java, linux];

  return (
    <div className="rounded-sm overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={40}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        className="swiper-linear rounded-sm"
      >
        {slides.map((img, index) => (
          <SwiperSlide
            key={index}
            style={{ width: "450px" }}
          >
            <img
              src={img}
              alt={`slide-${index}`}
              className="sm:w-full w-78 h-80 rounded-sm"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
