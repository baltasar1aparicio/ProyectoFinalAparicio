import { useContext, useState } from "react";
import { toCapital } from "../helpers/toCapital"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";
import '../styles/ItemDetail.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ItemDetail = ({ item }) => {


  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(item, cantidad);
    toast.success('¡Producto agregado al carrito!');
  }

  return (
    <div className="container">
      <div className="producto-detalle-container">
        <img className="producto-detalle-img" src={item.imagen} alt={item.titulo} />
        <div className="producto-detalle">
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Anime: {toCapital(item.categoria)}</p>
          <p className="precio">${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => { handleAgregarAlCarrito(item, cantidad) }}
          />
          <ToastContainer
            position="top-center"
            autoClose={4000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="light"
            transition:Bounce />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail