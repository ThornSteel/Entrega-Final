import React from 'react'
import "./styles/productos.css"
import { Link } from 'react-router-dom'

export const ItemList = ({ data }) => {
    return (
        <Link className='linkProducto' to={`/detalle/${data.id}`}>
            <div className='tarjetas'>
                <div className='titulo'>
                    <h2> {data.nombre} </h2>
                </div>
                <div className='imagen'>
                    <img src={data.imagen} alt={data.nombre} />
                </div>
                <div className='descripcion'>
                    <p> ${data.precio} USD </p>
                </div>
            </div>
        </Link>
    )
}
