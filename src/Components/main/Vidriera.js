import React from 'react';

//renderizado de productos de la api

const Vidriera = ({data, agregarCarrito}) => {

  let{productId, imageUrl, productName, listPrice, price} = data;

  return (
    <div>
      <img src={imageUrl} alt={price}/>
      <h5>{productName}</h5>
      <p>de {listPrice? listPrice : 30000}</p>
      <p>por {price}</p>
      <button onClick={()=> agregarCarrito(productId)} >Comprar</button>
    </div>
  )
}

export default Vidriera;