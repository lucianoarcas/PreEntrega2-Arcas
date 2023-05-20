import { useState, useEffect } from "react"
import "./Contador.css"



const Contador = ({ inicial, stock, precio}) => {

    const [contador, setContador] = useState(1) // tengo el problema que si quiero poner el valor inicial que paso por prop no me lo renderiza, solo si pongo el nro 1 lo renderiza y toma correctamente los valores de inicial y stock para poner los limites del contador

    useEffect (() => {

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

    const subtotal = precio*contador


    return (

        <>

            <div className="contador">
                <button onClick={restarContador}> - </button>
                <strong id="cant"> {contador} </strong>
                <button onClick={sumarContador}> + </button>
                

            </div>
            <p>SubTotal: ${subtotal} </p>
        </>
    )
}

export default Contador
