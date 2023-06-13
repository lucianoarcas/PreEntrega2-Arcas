import { useState, useEffect } from "react"
import "./Contador.css"



const Contador = ({ inicial, stock, precio, funcionAgregar }) => {

    const [contador, setContador] = useState(1)
    useEffect(() => {

    }, [contador])


    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1)
        }
    }

    const subtotal = precio * contador
    console.log(subtotal)

    return (

        <>

            <div className="contador">
                <button onClick={restarContador}> - </button>
                <strong id="cant"> {contador} </strong>
                <button onClick={sumarContador}> + </button>

            </div>
            <p>SubTotal: ${precio * contador} </p>

            <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </>
    )
}

export default Contador
