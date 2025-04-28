import './Cart.css';
import { pizzaCart } from "../../assets/js/pizzas";
import { useState } from 'react';
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentarCantidad = (id) => {
    setCart(cart.map(pizza =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    ));
  };

  const disminuirCantidad = (id) => {
    setCart(cart
      .map(pizza => (pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza))
      .filter(pizza => pizza.count > 0) 
    );
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
<> 
    <div className='cart-container'>
      <h2>Detalles del pedido:</h2>
        {cart.length > 0 ? (
        cart.map((pizza) => (
          <CartItem
            key={pizza.id}
            pizza={pizza}
            aumentarCantidad={aumentarCantidad}
            disminuirCantidad={disminuirCantidad}
          />
        ))
      ) : (
        <p>El carrito está vacío.</p>
      )}
      <h2>Total: ${total}</h2>
      <button className='button-pay'>Pagar</button>
  
    </div>
    </>
  );
}

export default Cart;
