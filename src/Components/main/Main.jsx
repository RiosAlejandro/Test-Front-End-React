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

import Vidriera from './Vidriera.jsx';
import Carrito from '../carrito/carrito';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

import {useMediaQuery, useMediaQueries} from '@react-hook/media-query'


  

const Main = ()=> {


    //funcion para medir cambios en tamaño de pantalla
        const {matches, matchesAny, matchesAll} = useMediaQueries({
          screen: 'screen',
          width: '(min-width: 765px)'
        });


    const [productos, setProductos] = useState([]);//carga de api en estado

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
    const [mostrarCompras, setMostrarCompras] = useState([]);//mostrar productos comprados

    const agregarCarrito = (id) =>{

        setCompras(id);
        let fl = productos.filter(c => c.productId === compras);
        console.log(fl);
        let totalFiltrar = [fl, ...mostrarCompras];
        setMostrarCompras(totalFiltrar);
    };

 
   

  return (
    <main>
        {/*Swiper para carpusel de productos*/}
        <h1>Más vendidos</h1>
        <hr className='hrMain' />
        <Swiper
            slidesPerView={matches.width ? 4 : 2}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
            clickable: true,
            }}
            navigation = {matches.width ? true : false}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {
                productos.map((product, key) =>(
                    <SwiperSlide className='productos'>
                        
                        {/*<Vidriera key={key} data={product} agregarCarrito={agregarCarrito} />*/}
                        <div className='productoMain' key={key}>
                            <img className='imgProducto' src={product.imageUrl} alt={product.price}/>
                            <h5>{product.productName}</h5>
                            <p className='tachado'>de ${product.listPrice? product.listPrice : 30000}</p>
                            <p className='precioFinal' >por ${product.price}</p>
                            <button className='botonProducto' onClick={()=> agregarCarrito(product.productId)} >Comprar</button>
                            </div>
                    </SwiperSlide>
                ))
            }
        

        </Swiper>

            {/*<div className='areaCarrito'>
                <FontAwesomeIcon icon={faCartShopping} />
                <div className='pseudocarrito'>
                    <h3>PseudoCarrito</h3>
                    <span>
                            {mostrarCompras.map((m) =><Carrito data={m}/>)}
                    </span>
                </div>
            </div>*/}
        
    </main>
  )
  
}



export default Main;
