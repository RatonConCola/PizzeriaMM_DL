import Header from "../Header/Header";
import './Home.css'
import CardPizza from "../CardPizza/CardPizza"
import { pizzas } from "../../assets/js/pizzas";

const Home = () =>{

    const listaPizzas = [...pizzas];

    return(
        <>
        <Header titulo="¡Pizzeria Mamma Mia!" subtitulo="¡Tenemos las mejores pizzas que podrás encontrar!"></Header>
        <div className="home-container">
            <ul>
            {listaPizzas.map(pizza => <CardPizza key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} />)}
            </ul>
        </div>
        

        </>
    )
}

export default Home;  