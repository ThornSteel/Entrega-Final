import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ItemQuantitySelector = ({ data, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [stock, setStock] = useState(0);
    const [loading, setLoading] = useState(true);

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (stock === 0) {
            setContador(0);
        }
    }, [stock]);

    useEffect(() => {
        if (data) {
            setStock(data.Stock);
            setLoading(false);
        }
    }, [data]);

    const incrementa = () => {
        if (contador < stock) {
            setContador(contador + 1);
        } else {
            alert("No queda mas en stock");
        }
    };

    const decrementa = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    const onAddToCart = () => {
        if (contador <= stock) {
            setStock(stock - contador)
            setContador(1)
            setVisible(true)
            onAdd(contador)
        }
    };

    if (loading) {
        return <div>Cargando...</div>; 
    }

    return (
        <div className="container d-flex justify-content-center flex-column gap-3">
            <div className="row text-center">
                <div className="col">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn btn-primary" onClick={decrementa}>-</button>
                        <button type="button" className="btn btn-primary">{contador}</button>
                        <button type="button" className="btn btn-primary" onClick={incrementa}>+</button>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={onAddToCart}>Agregar al carrito</button>
                    {visible ? <Link to={'/carrito'}><button type="button" className="btn btn-primary" >Terminar Compra</button></Link> : null}
                </div>
            </div>
        </div>
    );
};
