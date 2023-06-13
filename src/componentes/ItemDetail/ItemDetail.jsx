import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador'


import { CarritoContext } from '../../Context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { addItem } = useContext(CarritoContext);
  const {cart} = useContext(CarritoContext)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    addItem(item, cantidad);
  }

  console.log(...cart)

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3>ID: {id} </h3>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae, eveniet voluptatibus beatae, nemo cumque tempore modi?</p>
      <img src={img} alt={nombre} />
      {
        agregarCantidad > 0 ? (<> <button><Link to="/"> Seguir comprando </Link></button> <button><Link to="/cart"> Terminar Compra </Link></button></>): (<Contador inicial={1} precio={precio} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail