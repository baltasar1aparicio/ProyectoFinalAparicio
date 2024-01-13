import React, { useEffect } from 'react'
import '../styles/Nosotros.css'
import satoru from '../icons/satorugojo-eyes.png'
const Nosotros = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container-nosotros">
      <h1 className="main-title-nosotros">Nosotros</h1>
      <p>
        Te invitamos a conocer la historia detrás de nuestro apasionado emprendedor, Baltasar. Apasionado por el anime y decidido a compartir su entusiasmo con el mundo, Baltasar fundó "GeekStore", un espacio virtual dedicado a ofrecer las figuras de anime más cautivadoras.

        En GeekStore, nos enorgullece conectar a los amantes del anime con tesoros únicos que capturan la esencia de sus series favoritas. La idea es que GeekStore se convierta en un portal online donde los aficionados pueden explorar y adquirir figuras de anime detalladas y exclusivas.
        Cada clic en nuestra tienda en línea no solo es una transacción, sino una entrada a un mundo donde la devoción por el anime se traduce en objetos tangibles que llenan los estantes de los verdaderos fanáticos.
        ¡Bienvenidos a GeekStore!
      </p>
      <img className='satoru-nosotros' src={satoru} alt="Satoru Gojo Eyes" />
    </div>
  )
}

export default Nosotros