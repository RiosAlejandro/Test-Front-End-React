//import React from 'react';
//import './header.css';


/*const Header = () =>{

    const carrousel = document.querySelector('.carrousel');
    const selector = document.querySelectorAll('.selector');

    

    return(
        <header className="contenedorCarrousel">
            <div className="carrousel">
                <div className="contenedorImagen">
                    <p>holanda</p>
                </div>
                <div className="contenedorImagen">
                    <p>holanda1</p>
                </div>
                <div className="contenedorImagen">
                    <p>holanda2</p>
                </div>
                <div className="contenedorImagen">
                    <p>holanda3</p>                
                </div>
            </div>

            <ul className="selectores">
                <li className="selector activo"></li>
                <li className="selector"></li>
                <li className="selector"></li>
                <li className="selector"></li>
            </ul>
    </header>
    );
}

export default Header;*/


import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./header.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
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
          
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}