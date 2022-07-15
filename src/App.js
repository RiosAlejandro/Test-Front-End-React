import React from 'react';
import './App.css';
import Footer from './Components/footer/Footer.jsx';
import Header from './Components/Header/Header.jsx';
import Main from './Components/main/Main.jsx';
import Section from './Components/section/Section.jsx';
import Navegacion from './Components/navegacion/Navegacion.jsx';


function App() {
  return (
    <>

      <Navegacion />  
      <Header />
      <Main />
      
      <Section />
      <Footer />
      
    </>
  );
}

export default App;
