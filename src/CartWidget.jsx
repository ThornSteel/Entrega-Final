import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'

export const CartWidget = () => {

    const { countProducts } = useContext(CartContext)

    if (countProducts() > 0) {
        return (
            <Link to={'/carrito'} className="btn btn-primary position-relative " style={{ height: "40px", alignItems: "center" }}>
                <i className="bi bi-cart"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {countProducts()}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </Link>
        )
    }
}
