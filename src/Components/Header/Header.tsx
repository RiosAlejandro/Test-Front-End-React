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


//Carousel de header construido con la libreria de Swiper

 const Header = ()=> {
  return (
    <header className="contenedorHeader">
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
          <div className="textoCarousel">
            <p>¡Hola! ¿Qué es lo que buscas?</p>
            <h5>Crear o migrar tu comercio electrónico?</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="imagen2" />
          <div className="textoCarousel">
            <h5>Liderar la evolución del mercado</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="imagen3" />
          <div className="textoCarousel">
            <h5>Crecimiento de tu <br /> E-commerce</h5>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="imagen4" />
          <div className="textoCarousel">
            <h5>Planificar el crecimiento de tu negocio</h5>
          </div>
        </SwiperSlide>
      </Swiper>
    </header>
  );
}

export default Header;