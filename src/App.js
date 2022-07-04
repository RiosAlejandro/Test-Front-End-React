import React from 'react';
import './App.css';
import Footer from './Components/footer/Footer.tsx';
import Header from './Components/Header/Header.tsx';
import Main from './Components/main/Main.tsx';
import Section from './Components/section/Section.tsx';
import Navegacion from './Components/navegacion/Navegacion.tsx';


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
