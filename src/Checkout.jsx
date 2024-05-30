import React, { useContext, useState } from 'react';
import { CartContext } from './context/CartContext';
import { Link } from 'react-router-dom';

export const Checkout = () => {
  const { cart, countProducts, sumPriceProducts } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [orderId, setOrderId] = useState("");

  const generarOrden = () => {
    if (nombre === "" || email === "" || telephone === "") {
      alert("Todos los campos son obligatorios");
      return false;
    }

    const newOrderId = Math.floor(Math.random() * 200) + 1;
    setOrderId(newOrderId);

  }

  if (countProducts() === 0) {
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            <div className="alert alert-info" role="alert">
              No agregaste productos
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
          <h2>Checkout</h2>
          <div className="contenedorForm">
            <input
              type="text"
              placeholder='Tu nombre'
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <input
              type="email"
              placeholder='Tu correo'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder='Tu telefono'
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
            />
          </div>
          <h3>Detalles del Pedido</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.quantity}</td>
                  <td>${item.precio}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2"><strong>Total</strong></td>
                <td><strong>${sumPriceProducts()}</strong></td>
              </tr>
            </tfoot>
          </table>
          <button
            className="btn text-white bg-dark my-5 rounded-0"
            onClick={generarOrden}
          >
            Generar Orden
          </button>
          {orderId && (
            <div className="alert alert-success mt-3">
              <p>Orden generada con éxito. Su ID de orden es: {orderId}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
