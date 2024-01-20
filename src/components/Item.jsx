import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Item.css'

const Item = ({ producto }) => {
  return (
      <div className="producto">
      <img src={producto.imagen} alt={producto.titulo} />
      <div className='centrar-item'>
        <h4>{producto.titulo}</h4>
        <p>Precio: ${producto.precio}</p>
        <p>Anime: {producto.anime}</p>
        <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
      </div>
    </div>
    
  )
}

export default Item