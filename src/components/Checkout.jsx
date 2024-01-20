import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { dataBase } from '../firebase/dataBase';
import '../styles/Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState('');

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal(),
        };

        console.log(pedido);

        const pedidosRef = collection(dataBase, 'pedidos');

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            });
    };

    if (pedidoId) {
        return (
            <div className="container-checkout">
                <h1 className="main-title-checkout">Muchas gracias por tu compra</h1>
                <p className='checkout-pedido-id'>Tu número de pedido es: {pedidoId}</p>
                <p className='checkout-pedido-id'>Puede realizar el seguimiento en la pestaña&nbsp; <Link to="/seguimiento" className='seguimiento-checkout-word'>Seguimiento</Link></p>
            </div>
        );
    }

    return (
        <div className="container-checkout">
            <h1 className="main-title-checkout">Finalizar compra</h1>
            <form className="formulario-checkout" onSubmit={handleSubmit(comprar)}>

                <input type="text" placeholder="Ingresá tu nombre" {...register('nombre')} />

                <input type="email" placeholder="Ingresá tu e-mail" {...register('email', { required: 'Este campo es obligatorio' })} />
                {errors.email && <p className="error-message">{errors.email.message}</p>}

                <input type="email" placeholder="Confirmá tu e-mail" {...register('confirmarEmail', {
                    required: 'Este campo es obligatorio',
                    validate: (value) => value === watch('email') || 'Los correos electrónicos no coinciden',
                })} />
                {errors.confirmarEmail && <p className="error-message">{errors.confirmarEmail.message}</p>}

                <input type="phone" placeholder="Ingresá tu teléfono" {...register('telefono')} />

                <button className="enviar-checkout" type="submit">Comprar</button>

            </form>
        </div>
    );
};

export default Checkout;
