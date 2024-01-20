import { useContext, useState } from "react";
import { toCapital } from "../helpers/toCapital"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";
import '../styles/ItemDetail.css'


const ItemDetail = ({ item }) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const [mostrarTooltip, setMostrarTooltip] = useState(false);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(item, cantidad);
    setMostrarTooltip(true);
    setTimeout(() => {
      setMostrarTooltip(false);
    }, 2000);
  }

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
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
          <p className={`tooltip-itemdetail ${mostrarTooltip ? 'visible-tooltip' : ''}`}>Producto agregado</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail