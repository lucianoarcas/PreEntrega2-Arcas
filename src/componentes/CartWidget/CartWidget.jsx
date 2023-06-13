import './CartWidget.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../Context/CarritoContext';


const CartWidget = () => {

    const {cart} = useContext(CarritoContext)

    const totalCantidad = cart.reduce((total, producto) => total + producto.cantidad, 0)



    return (
        <Link to="/cart">
            <img className='imgCarrito' src="../img/carrito.png" alt="Carrito" />
            {
            totalCantidad > 0 && <span> {totalCantidad} </span>
            }
        </Link>
    )
}

export default CartWidget