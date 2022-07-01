import React from 'react';
//import PropTypes from 'prop-types'
import './section.css';

function Section() {
  return (
    <section className="seccionFormulario">
        <h2>¡Únete a nuestras novedades y promociones!</h2>

        <form className="formularioNew">
            <input placeholder="Ingresa tu nombre" className="inputFormulario" />
            <input placeholder="Ingresa tu mail" className="inputFormulario" />

            <button className="botonFormulario">Suscribirme</button>
        </form>
    </section>
  )
};

//Section.propTypes = {}

export default Section;
