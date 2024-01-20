import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import '../styles/Carrito.css'


const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito, handleEliminar } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container-carrito">
            <h1 className="main-title-carrito">Carrito</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id} className='carrito-item'>
                        <br />
                        <h3>{prod.titulo}</h3>
                        <img src={prod.imagen} alt={prod.titulo} className="carrito-imagen" />
                        <p>Precio unit: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <button className='boton-carrito' onClick={() => handleEliminar(prod.id)}>
                        Eliminar
                    </button>
                        <br />
                    </div>
                ))
            }

            <div className='carrito-total'>
                {
                    carrito.length > 0 ?
                        <>
                            <h2>Precio total: ${precioTotal()}</h2>
                            <Link to="/checkout" className='carrito-finalizar_compra'>Finalizar compra</Link>
                            <button className='boton-carrito' onClick={handleVaciar}>Vaciar</button>
                        </> :
                        <h2 className='vacio-carrito'>El carrito está vacío :(</h2>
                }
            </div>

        </div>
    )
}

export default Carrito