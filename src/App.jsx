import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nosotros } from './Nosotros';
import { ErrorComponent } from './ErrorComponent';
import { Navbar } from './Navbar';
import { ItemListContainer } from './ItemListContainer';
import { ItemDetailContainer } from './ItemDetailContainer';
import { Checkout } from './Checkout';
import CartContextProvider from './context/CartContext';
import { Cart } from './Cart';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={'/*'} element={<ErrorComponent />} />
          <Route path={'/'} element={<Nosotros />} />
          <Route path={'/productos'} element={<ItemListContainer />} />
          <Route path={'/productos/:idCategoria'} element={<ItemListContainer />} />
          <Route path={'/detalle/:idDetalle'} element={<ItemDetailContainer />} />
          <Route path={'/checkout'} element={<Checkout />} />
          <Route path={'/carrito'} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
