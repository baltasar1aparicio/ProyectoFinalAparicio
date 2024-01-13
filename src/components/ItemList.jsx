import Item from "./Item";
import { toCapital } from "../helpers/toCapital";
import '../styles/ItemList.css'


const ItemList = ({ productos, titulo }) => {

  return (
    <div className="container-itemlist">
      <h2 className="main-title-itemlist">{toCapital(titulo)}</h2>

      <div className="productos-itemlist">
        {productos.map((prod) => <Item producto={prod} key={prod.id} />)}
      </div>
    </div>
  )
}

export default ItemList