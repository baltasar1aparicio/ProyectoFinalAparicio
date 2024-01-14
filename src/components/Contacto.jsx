import { useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { dataBase } from '../firebase/dataBase';
import '../styles/Contacto.css';

const Contacto = () => {
  const { register, handleSubmit } = useForm();
  const [enviado, setEnviado] = useState(false);

  const enviar = async (data) => {
    try {
      const contactosRef = collection(dataBase, "contactos");
      await addDoc(contactosRef, data);

      console.log("Datos enviados:", data);

      setEnviado(true);
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className="container-contacto">
      <h1 className="main-title-contacto">Contacto</h1>
      
      {enviado ? (
      <h3 className="enviado-contacto">¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</h3>) : (
        <form className="formulario-contacto" onSubmit={handleSubmit(enviar)}>
          <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
          <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
          <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />
          <textarea className="input-mensaje-contacto" rows="4" cols="50" placeholder="Escribe tu mensaje aquí..." {...register("mensaje")}></textarea>
          <button className="enviar-contacto" type="submit"> Enviar </button>
        </form>
      )}
    </div>
  );
};

export default Contacto;

