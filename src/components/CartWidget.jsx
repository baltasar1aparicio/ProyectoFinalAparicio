import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import cartIcon from '../icons/metodo-de-pago.png'

const CartWidget = () => {

  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="menu-link" to="/carrito">
        <img className='cartwidget-icon' src={cartIcon} alt="Carrito" />
        <span className="numerito">{cantidadEnCarrito()}</span>
      </Link>
    </div>
  )
}

export default CartWidget