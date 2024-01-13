import React, { useState } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { dataBase } from '../firebase/dataBase';
import '../styles/Seguimiento.css'

const Seguimiento = () => {
    const [orderId, setOrderId] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);

    const handleTrackOrder = async () => {
        try {
            const orderDocRef = doc(dataBase, 'pedidos', orderId);
            const orderSnapshot = await getDoc(orderDocRef);

            if (orderSnapshot.exists()) {
                setOrderDetails(orderSnapshot.data());
            } else {
                alert('Código de pedido invalido');
            }
        } catch (error) {
            console.error('Error al rastrear el pedido:', error.message);
        }
    };

    return (
        <div className='container-seguimiento'>
            <h1 className='main-title-seguimiento' >Rastreo de Pedido</h1>
            <label className='second_container-seguimiento'>
                Código de Compra:
                <input className='input-seguimiento' type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
            </label>
            <button className='boton-seguimiento' onClick={handleTrackOrder}>Rastrear Pedido</button>

            {orderDetails && (
                <div>
                    <h2 className='detail-seguimiento'>Detalles del Pedido</h2>
                    <p className='client-seguimiento'>Cliente: {orderDetails.cliente.nombre}</p>
                    <p className='email-seguimiento'>Email: {orderDetails.cliente.email}</p>
                    <h3 className='encabezado-seguimiento'>Productos Comprados:</h3>
                    <ul className='orden-seguimiento'>
                        {orderDetails.productos.map((producto) => (
                            <li className='id-seguimiento' key={producto.id}>
                                <img className='img-seguimiento' src={producto.imagen} alt={producto.titulo} />
                                <p className='titulo-seguimiento'>{producto.titulo}</p>
                                <p className='cant-seguimiento'>Cantidad: {producto.cantidad}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Seguimiento;
