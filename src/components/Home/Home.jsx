import Header from "../Header/Header";
import './Home.css'
import CardPizza from "../CardPizza/CardPizza"
import { pizzas } from "../../assets/js/pizzas";
import Pizza from "../Pizza/Pizza";

const Home = () =>{

   /*  const listaPizzas = [...pizzas]; */

    return(
        <>
        <Header titulo="¡Pizzeria Mamma Mia!" subtitulo="¡Tenemos las mejores pizzas que podrás encontrar!"></Header>
        <div className="home-container">
            <Pizza></Pizza>
        </div>
        

        </>
    )
}

export default Home;  