import React, { useContext } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const { cart, removeItem, clear, countProducts, sumPriceProducts } = useContext(CartContext);

    if (countProducts() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-info" role="alert">
                            No hay productos en el carrito
                        </div>
                        <Link className="btn text-white bg-dark my-5 rounded-0" to="/productos">Volver atrás</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={8} className='text-end'><button className="btn text-white bg-dark my-5 rounded-0" onClick={() => clear()}>Vaciar</button> </td>
                            </tr>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} /></td>
                                    <td>{item.nombre}</td>
                                    <td>${item.precio}</td>
                                    <td>{item.quantity}</td>
                                    <td className="text-end">
                                        <i className="bi bi-trash3" onClick={() => removeItem(item.id)}></i>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3}><b>Total $</b></td>
                                <td className="text-end" colSpan={2}><b>{sumPriceProducts()}</b></td>
                                <td>&nbsp;</td>
                                <td className='text-end'> <Link to={'/checkout'} className="btn text-white bg-dark my-5 rounded-0">Checkout</Link> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
