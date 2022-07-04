import React from 'react';
import './navegacion.css';
import menu from '../../Assets/vectores/Icon2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navegacion = () => {
  return (
    <nav className='navegacion'>
      <div className='menu' >
        <img src={menu} alt="menu" />
      </div>
      <div>
        <h1>COREBIZ.</h1>
      </div>

      <div className='busca'>
        <input placeholder='¿Qué estás buscando?' />
      </div>

      <div className='cuenta'><FontAwesomeIcon icon={faUser} /><p>Mi cuenta</p></div>

      
    </nav>
  )
}


export default Navegacion;
