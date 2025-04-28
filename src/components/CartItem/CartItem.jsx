import './CartItem.css'

const CartItem = ({ pizza, aumentarCantidad, disminuirCantidad }) => {
    return (
      <div className="cart-item">
  <img src={pizza.img} alt={pizza.name} width={80} />
  
  <div className="cart-details">
    <h3>{pizza.name}</h3>
    <b>${pizza.price}</b>
  </div>

  <div className="cart-controls">
    <button className='button-minus' onClick={() => disminuirCantidad(pizza.id)}>-</button>
    <b>{pizza.count}</b>
    <button className='button-plus' onClick={() => aumentarCantidad(pizza.id)}>+</button>
  </div>
</div>

    );
  };
  
  export default CartItem;
  