import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { db } from '../../services/config';
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {
  const [inventario, setInventario] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", idItem);

    getDoc(nuevoDoc)
        .then(res => {
            const data = res.data();
            const nuevoProducto = { id: res.id, ...data }
            setInventario(nuevoProducto);
        })
        .catch(error => console.log(error))
}, [idItem])

  return (
    <div className='itemDetailContainer'>
      <ItemDetail {...inventario} />

    </div>
  )
}

export default ItemDetailContainer