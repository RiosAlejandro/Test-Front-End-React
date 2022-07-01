import React from 'react';
//import PropTypes from 'prop-types'
import './footer.css';



function Footer() {
  return (
    <>
        <footer className="pie">
            <h4>Ubicación</h4>
            <br/>
            <p>Avenida Andrómeda, 2000. Blaco 6 e 8</p>
            <p>Alphavile SP</p>
            <p>brasil@corebiz.ag</p>
            <p>+55 11 3090 1039</p>

            <div className="contenedorBotones">
                <button className="botonPie">Contáctanos</button>

                <button className="botonPie">Habla con un consultor</button>
            </div>

            <div className="logosPie">
                <div className="logoPie">
                    <h5>ajam</h5>
                </div>
                <div className="logoPie">
                    <h5>blam</h5>
                </div>
            </div>

        </footer>

        <div className="final"></div>
    </>
  )
}

//Footer.propTypes = {}

export default Footer;
