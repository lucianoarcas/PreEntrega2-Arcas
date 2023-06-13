import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/config';
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [inventario, setInventario] = useState([]);

    const {idCategoria} = useParams();


    useEffect( ()=> {
        const misProductos = idCategoria ? query(collection(db, "inventario"), where("idCat", "==", idCategoria)) : collection(db, "inventario");
    
        getDocs(misProductos)
          .then(res => {
            const nuevosProductos = res.docs.map(doc => {
              const data = doc.data()
              return {id:doc.id, ...data}
            })
            setInventario(nuevosProductos.sort((a,b)=>a.id-b.id));
          })
          .catch(error => console.log(error))
      },[idCategoria])

      return (
        <>
          <h2 style={{textAlign: "center"}}> Mis productos </h2>
          <ItemList productos={inventario} />
        </>
      )
    }
    
    export default ItemListContainer