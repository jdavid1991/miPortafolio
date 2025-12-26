import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import aws from "../assets/aws.png";
import backend from "../assets/backend.png";
import fullstack from "../assets/fullstack.png";

export default function Carousel() {
  const slides = [aws, backend, fullstack];

  return (
    <div className="rounded-sm overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        loop={true}
        slidesPerView="auto"
        speed={6000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        centeredSlides={true}
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
