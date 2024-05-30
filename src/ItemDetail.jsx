import React, { useContext } from 'react'
import { ItemQuantitySelector } from './ItemQuantitySelector'
import { CartContext } from './context/CartContext'

export const ItemDetail = ({ data }) => {
    const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        addItem(data,quantity)
    }

    return (
        <div className='contenedorDetail'>
            <h1>{data.nombre}</h1>
            <img src={data.imagen} alt={data.nombre} />
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, est. </p>

            <div className='contenedorContador'>
                <ItemQuantitySelector data={data} onAdd={onAdd} />
            </div>
        </div>
    )
}
