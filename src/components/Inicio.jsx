import React from 'react'
import Logo from '../icons/geekstore-logo1.png'
import mti from '../icons/mahito-todo-itadori-inicio.png'
import '../styles/Inicio.css'

const Inicio = () => {
  return (
    <div className='container-inicio'>
        <h2 className='welcome-inicio'>Bienvenidos a</h2>
        <img className='logo-inicio' src={Logo} alt="GeekStore-Logo" />
        <img className='mti-inicio' src={mti} alt="Mahito-Todo-Itadori" />
    </div>
  )
}

export default Inicio