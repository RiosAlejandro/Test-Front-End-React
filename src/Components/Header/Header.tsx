import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import "./header.css";
import image1 from "../../Assets/car1.jpg";
import image2 from "../../Assets/car2.jpg";
import image3 from "../../Assets/car3.jpg";
import image4 from "../../Assets/car4.jpg";



export default function App(imagen) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={image1} alt="imagen1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="imagen2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="imagen3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="imagen4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}