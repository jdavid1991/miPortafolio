import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aws from "/assets/aws.png";
import backend from "/assets/backend.png";
import fullstack from "/assets/fullstack.png";
import java from "/assets/java.png";
import linux from "/assets/linux.png";
import javascript from "/assets/javascript.png";

export default function Carousel() {
  const slides = [aws, backend, fullstack, java, linux, javascript];

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
        className="swiper-linear"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index} style={{ width: "450px" }}>
            <img
              src={img}
              alt={`slide-${index}`}
              className="w-full h-80 rounded-sm"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
