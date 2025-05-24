import { useContext } from "react";
import { PizzaContext } from "../../context/PizzaContext";
import CardPizza from "../../components/CardPizza/CardPizza";
import "./Pizza.css";

function Pizza() {
  const { pizzas, loading } = useContext(PizzaContext);

  if (loading) return <p>Cargando pizzas...</p>;

  return (
    <div className="pizzaz-container">
      <ul className="pizzaz-ul">
        {pizzas.map(p => (
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
  );
}

export default Pizza;
