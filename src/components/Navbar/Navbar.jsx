import './Navbar.css';
import BotonNav from '../common/Boton/BotonNav';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const total = 25000;
  const token = true;

  return (
    <div className="nv-container">
      <ul>
        <li>Pizzeria Mamma Mia!</li>
        <BotonNav to='/' icon='fa-solid fa-pizza-slice' menuOption='Home' />
        <BotonNav to='/pizza' icon='fa-solid fa-pizza-slice' menuOption='Catálogo' />
        {token ? (
          <>
            <BotonNav to='/profile' icon='fa-solid fa-unlock' menuOption='Profile' />
            <BotonNav to='/404' icon='fa-solid fa-lock' menuOption='Logout' />
          </>
        ) : (
          <>
            <BotonNav to='/login' icon='fa-solid fa-key' menuOption='Login' />
            <BotonNav to='/register' icon='fa-solid fa-key' menuOption='Register' />
          </>
        )}
      </ul>

      <div className='nv-cart'>
        <i className='fa-solid fa-cart-shopping'></i>
        <Link to='/cart'>Total: <span>${total.toLocaleString()}</span></Link>
      </div>
    </div>
  );
};

export default Navbar;
