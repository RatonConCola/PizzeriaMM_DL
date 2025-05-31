import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./PizzaDetail.css"
import CardPizza from "../../components/CardPizza/CardPizza"


function PizzaDetail() {
    const {id} = useParams();
    const [pizza, setPizza] = useState(null);
    const [loading, setLoading] = useState(true);


        useEffect(() =>{
            const getPizza = async() => {
                try {
                    const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
                    const data = await res.json();
                    setPizza(data);
                }catch(error) {
                console.error("Error al cargar la pizza:", error);
            } finally {
                setLoading(false);
            }
        };

        getPizza();
    },[id]);



    if(loading) return <p>Cargando Pizza...</p>;
    if(!pizza) return <p>No se encontró la pizza</p>

    return(
        <>
            <div className="pizza-detail">
                <CardPizza
                    id={pizza.id}
                    name={pizza.name}
                    price={pizza.price}
                    ingredients={pizza.ingredients}
                    desc={pizza.desc}
                    img={pizza.img}
                    showDesc={true}
                />
            </div>
        </>
    )
}

export default PizzaDetail; 