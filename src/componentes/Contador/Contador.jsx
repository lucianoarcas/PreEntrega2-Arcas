import { useState, useEffect } from "react"
import "./Contador.css"

const Contador = ({inicial, stock}) => {

    const [contador, setContador] = useState (inicial)

    useEffect( () => {

    })

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1)
        } 
    }

    const restarContador = () => {
        if (contador > inicial){
            setContador(contador - 1)
        }
    }


  return (
    <div className="contador">
        <button onClick={restarContador}> - </button>
        <strong>{contador} </strong>
        <button onClick={sumarContador}> + </button>

    </div>
  )
}

export default Contador
