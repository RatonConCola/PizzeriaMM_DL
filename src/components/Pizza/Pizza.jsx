import { useEffect, useState } from "react";
import CardPizza from "../CardPizza/CardPizza";

function Pizza() {
    const [pizza, setPizza] = useState([])


    const url = "http://localhost:5000/api/pizzas/"

    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPizza(data);
    };

    useEffect(() => {
        getData();
    },[])

    return(
        <>
            <div className="pizzaz-container">
                 <ul>
                    {pizza.map(p => (
                        <li key={p.id}>
                        <CardPizza
                            id={p.id}
                            name={p.name}
                            img={p.img}
                            desc={p.desc}
                            price={p.price}
                            ingredients={p.ingredients}
                        />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Pizza;