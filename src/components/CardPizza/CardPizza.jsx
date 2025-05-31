import './CardPizza.css';
import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext'; 
import { Link } from 'react-router-dom';

const CardPizza = ({ id, name, price, ingredients, desc, img, showDesc = false }) => {
  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = () => {
    const product = { id, name, price, img };
    addToCart(product);
  };

  return (
    <div className='pizza-container'>
      <img src={img} alt="pizza" />
      <Link to={`/pizza/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3>Pizza {name}</h3>
      </Link>

      <div className='pizza-details'>
        <p>Ingredientes:</p>
        <ul>
          {Array.isArray(ingredients) && (
            <>
              <li><i className="fa-solid fa-pizza-slice"></i></li>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {ingredient}{index !== ingredients.length - 1 ? ', ' : ''}
                </li>
              ))}
            </>
          )}
        </ul>
      </div>
      <h3>Precio: ${price ? price.toLocaleString('es-CL') : 'N/A'}</h3>
       <div className='pizza-buttons'>
        {!showDesc && (
          <Link to={`/pizza/${id}`} className="btn1">
            Ver más
          </Link>
        )}

        <button className="btn2" onClick={handleAddToCart}>
          Añadir <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
          {showDesc && <p className="pizza-desc">{desc}</p>}
    </div>
  );
};

export default CardPizza;
