import './CardPizza.css'
import { useState } from 'react';


const CardPizza = ({id, name,price,ingredients,desc, img}) =>{
    const [showDesc, setShowDesc] = useState(false);

    return(
        <>
            <div className='pizza-container'>
                <img src={img} alt="pizza" />
                <h3>Pizza {name}</h3>
                <div className='pizza-details'>
                    <p>Ingredientes: </p>
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
                        {showDesc && <p className='pizza-desc'>{desc}</p>}
                    </ul>
                </div>

                <h3>Precio: ${price ? price.toLocaleString('es-CL') : 'N/A'}</h3>
                <div className='pizza-buttons'>
                <button className="btn1" onClick={() => setShowDesc(!showDesc)}>
                    {showDesc ? 'Ver menos' : 'Ver más'}</button>
                <button className="btn2">Añadir<i className={'fa-solid fa-cart-shopping'}></i></button>
                </div>
            </div>
        </>
    )
}

export default CardPizza;