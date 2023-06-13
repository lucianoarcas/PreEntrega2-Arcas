import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from "react-router-dom"
import CartProd  from "../CartProd/CartProd"
import "../Cart/Cart.css"


const Cart = () => {

    const {cart, clearCart} = useContext(CarritoContext)
    const totalCantidad = cart.reduce((total, producto) => total + producto.cantidad, 0);
    const total = cart.reduce((total, producto)=> total + (producto.item.precio * producto.cantidad), 0);


    if(totalCantidad === 0) {
        return (
            <>
                <h2>No hay productos en el carrito </h2>
                <button><Link to='/'> Seguir Comprando </Link></button>
            </>
        )
    }


  return (
    <div className='carrito'>
        <h2>Su pedido:</h2>
        {cart.map(producto => <CartProd key={producto.id} {...producto} />)}
        <div className='pedidoTotal'>
            <h3> Cantidad Total: {totalCantidad} </h3>
            <h3> Total: $ {total}  </h3>
            <button onClick={()=> clearCart()}> Vaciar Carrito </button>
            <button> <Link to="/checkout"> Finalizar Compra </Link> </button>
        </div>
    </div>
  )
}

export default Cart
