import './Cart.css';
import CartItem from "../../components/CartItem/CartItem";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';


const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);
  const { token } = useContext(UserContext);


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
        <button className='button-pay' disabled={!token}>
          {token ? 'Pagar' : 'Inicia sesión para pagar'}
        </button>

      </div>
    </>
  );
};

export default Cart;
