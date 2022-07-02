import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./main.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Main = ()=> {

    const [productos, setProductos] = useState([]);

    const inicialUrl = "https://corebiz-test.herokuapp.com/api/v1/products";

    const apiCorebiz = (url) =>{
        fetch(url)
            .then(res => res.json())
            .then((data) =>{
                setProductos(data)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        apiCorebiz(inicialUrl);
    }, []);
    
    
  return (
    <main>
        <h1>Más vendidos</h1>

        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            //navigation: true
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                productos.map((item, key) =>(
                    <SwiperSlide className='productos' key={key}>
                        <img src={item.imageUrl} />
                        <h5>{item.productName}</h5>
                        <p>de {item.listPrice? item.listPrice : 30000}</p>
                        <p>por {item.price}</p>
                        
                    </SwiperSlide>
                ))
            }
            {
                productos.map((item, key) =>(
                    <SwiperSlide className='productos'>
                        <img src={item.imageUrl} />
                        <h5>{item.productName}</h5>
                        <p>de {item.listPrice? item.listPrice : 30000}</p>
                        <p>por {item.price}</p>
                        <button>Comprar</button>
                    </SwiperSlide>
                ))
            }
            
            

        </Swiper>

    </main>
  )
}

Main.propTypes = {
    productId: PropTypes.number,
    productName: PropTypes.string,
    starts: PropTypes.number,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    item: PropTypes.array,
    productos: PropTypes.array
}

export default Main;
