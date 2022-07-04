import React from 'react';
import { useForm } from 'react-hook-form';
import './section.css';

function Section() {

  const { register, formState: {errors} , handleSubmit } = useForm();

    const onSubmit = (data) => {console.log(data);}

  //validacion simple de campos de formulario con react-hook-form

  return (


    <section className="seccionFormulario">
        <h2>¡Únete a nuestras novedades y promociones!</h2>
        
        <form className="formularioNew" onSubmit={handleSubmit(onSubmit)}>

            <input placeholder="Ingresa tu nombre"  className="inputFormulario" 
            {...register("firstName", {required: true, minLength: 2, maxLength: 20, pattern: /^[A-Za-z]+$/i} )}
            />
            {errors.firstName && "First name is required"}

            <input placeholder="Ingresa tu mail" className="inputFormulario" 
            
            {...register("email", {required: true})}/*poner patron*/
            />
            {errors.email && "Email is required"}  
            <button className="botonFormulario">Suscribirme</button>
        </form>
    </section>
  )
};



export default Section;
