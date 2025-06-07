import './Cart.css';
import CartItem from "../../components/CartItem/CartItem";
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);
  const { token } = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/checkouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!response.ok) {
        throw new Error('Error en la compra');
      }

      const data = await response.json();
      setMessage('Compra realizada con éxito!');
      
    } catch (error) {
      setMessage('Error al realizar la compra. Intenta nuevamente.');
    }
  };

  return (
    <>
      <div className='cart-container'>
        <h2>Detalles del pedido:</h2>

        {cart.length > 0 ? (
          cart.map((pizza) => (
            <CartItem
              key={pizza.id}
              pizza={pizza}
              aumentarCantidad={() => addToCart(pizza)}
              disminuirCantidad={() => removeFromCart(pizza.id)}
            />
          ))
        ) : (
          <p>El carrito está vacío.</p>
        )}

        <h2>Total: ${total.toLocaleString('es-CL')}</h2>
        <button
          className='button-pay'
          disabled={!token}
          onClick={handleCheckout}
        >
          {token ? 'Pagar' : 'Inicia sesión para pagar'}
        </button>

        {message && <p className='message'>{message}</p>}
      </div>
    </>
  );
};

export default Cart;
