import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./main.css";

// import required modules
import { Pagination, Navigation } from "swiper";

import Vidriera from './Vidriera.js';
import Carrito from '../carrito/carrito';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Main = ()=> {

    const [productos, setProductos] = useState<any[]>([]);//carga de api en estado

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

    
    const [compras, setCompras] = useState();//carga de id de productos comprados
    const [mostrarCompras, setMostrarCompras] = useState<any[]>([]);//mostrar productos comprados

    const agregarCarrito = (id) =>{

        setCompras(id);
        let fl = productos.filter(c => c.productId === compras);
        console.log(fl);
        let totalFiltrar = [fl, ...mostrarCompras];
        setMostrarCompras(totalFiltrar);
    };

    //console.log(compras);
    //console.log(productos);



  return (
    <main>
        {/*Swiper para carpusel de productos*/}
        <h1>Más vendidos</h1>
<hr />
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
                productos.map((product, key) =>(
                    <SwiperSlide className='productos' key={key}>
                        
                        <Vidriera key={product.id} data={product} agregarCarrito={agregarCarrito} />
                        
                    </SwiperSlide>
                ))
            }
            {
                productos.map((product, key) =>(
                    <SwiperSlide className='productos' key={key}>
                        
                        <Vidriera key={product.id} data={product} agregarCarrito={agregarCarrito} />
                        
                    </SwiperSlide>
                ))
            }
            
            

        </Swiper>

            <div className='areaCarrito'>{/*NO ESTA VISIBLE, POR NO ESTAR TERMINADO*/}
                <FontAwesomeIcon icon={faCartShopping} />
                <div className='pseudocarrito'>
                    <h3>PseudoCarrito</h3>
                    <span>
                            {mostrarCompras.map((m) =><Carrito data={m}/>)}
                    </span>
                </div>
            </div>
        
    </main>
  )
  
}



export default Main;
