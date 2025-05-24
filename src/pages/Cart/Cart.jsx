import './Cart.css';
import CartItem from "../../components/CartItem/CartItem";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);

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
        <button className='button-pay'>Pagar</button>
      </div>
    </>
  );
};

export default Cart;
