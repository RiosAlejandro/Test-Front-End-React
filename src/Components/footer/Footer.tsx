import React from 'react';
import './footer.css';
import logoc from '../../Assets/vectores/site-logo-corebiz-preto-cinza.svg';
import vector4 from '../../Assets/vectores/Vector4.svg';
import logo from '../../Assets/vectores/Icon.svg';
import logo1 from '../../Assets/vectores/Icon1.svg';




function Footer() {
  return (
    <>
        <footer className="pie">
            <div>
                <h4>Ubicación</h4>
                <hr/>
                <p>Avenida Andrómeda, 2000. Blaco 6 e 8</p>
                <p>Alphavile SP</p>
                <p>brasil@corebiz.ag</p>
                <p>+55 11 3090 1039</p>
            </div>
            

            <div className="contenedorBotones">
                <span className="botonPie"><img src={logo} alt='logo1' />Contáctanos</span>

                <span className="botonPie"><img src={logo1} alt='logo2' />Habla con un consultor</span>
            </div>

            <div className="logosPie">
                <div className="logoPie">
                    <h5>Desarrollado por</h5>
                    <img src={logoc} alt="Corebiz pie" />
                </div>
                <div className="logoPie">
                    <h5 className='titulovtex'>Powered by</h5>
                    <img src={vector4} alt="vtex" />
                    <h6 className='vtex'>VTEX</h6>
                    
                </div>
            </div>

        </footer>

        <div className="final"></div>
    </>
  )
}


export default Footer;
