import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import "../CartProd/CartItem.css"


const CartProd = ({item, cantidad}) => {

    const {removeItem} = useContext(CarritoContext)


  return (
    <div className="productoInCart">
        <h4> {item.nombre} </h4>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: $ {item.precio} </p>
        <button className="btnEliminar" onClick={()=> removeItem(item.id)}> Eliminar </button>
    </div>
  )
}

export default CartProd
