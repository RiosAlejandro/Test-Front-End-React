import React from 'react';

const Carrito = ({data}) => {

  let{ imageUrl, productName, listPrice, price} = data;
  return (
    <div>
        <h3>Carrito</h3>
        <img src={imageUrl} alt={price}/>
        <h5>{productName}</h5>
        <p>de {listPrice? listPrice : 30000}</p>
        <p>por {price}</p>
    </div>
  )
}

export default Carrito;
