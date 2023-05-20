import Contador from '../Contador/Contador'
import './ItemDetail.css'
import "../Contador/Contador.css"



const ItemDetail = ({ id, nombre, precio, img, inicial, stock }) => {

  
 //const subtotal = cant * precio
  return (
    <div className='contenedorItem'>

      <img src={img} alt={nombre} />
      <h2> {nombre} </h2>
      <h3>Precio: ${precio} </h3>
      <h3> ID: {id} </h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum odit omnis modi consectetur beatae placeat a optio inventore cumque quod aspernatur sequi accusamus hic labore, vitae debitis blanditiis ad quisquam?</p>
      <Contador inicial={inicial} stock={stock} precio={precio} />
      

    </div>
  )
}

export default ItemDetail