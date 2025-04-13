import './CardPizza.css'


const CardPizza = ({name,price,ingredients,img}) =>{

    return(
        <>
            <div className='pizza-container'>
                <img src={img} alt="pizza" />
                <h3>Pizza {name}</h3>
                <div className='pizza-details'>
                    <p>Ingredientes: </p>
                    <ul>
                        <li><i className="fa-solid fa-pizza-slice"></i></li>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}{index !== ingredients.length - 1 ? ', ' : ''}</li>
                        ))}
                    </ul>
                </div>

                <h3>Precio: ${price.toLocaleString('es-CL')}</h3>
                <div className='pizza-buttons'>
                <button className="btn1">Ver más</button>
                <button className="btn2">Añadir<i className={'fa-solid fa-cart-shopping'}></i></button>
                </div>
            </div>
        </>
    )
}

export default CardPizza;