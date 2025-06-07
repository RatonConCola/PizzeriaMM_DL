import './Navbar.css';
import BotonNav from '../common/Boton/BotonNav';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

const Navbar = () => {
  const { cart, total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate(); // <- importante para redirigir

  const totalItems = cart.length;

  const handleLogout = () => {
    logout();
    navigate('/'); // <- redirige al home después de logout
  };

  return (
    <div className="nv-container">
      <ul>
        <li>Pizzeria Mamma Mia!</li>
        <BotonNav to='/' icon='fa-solid fa-pizza-slice' menuOption='Home' />
        <BotonNav to='/pizza' icon='fa-solid fa-pizza-slice' menuOption='Catálogo' />

        {token ? (
          <>
            <BotonNav to='/profile' icon='fa-solid fa-unlock' menuOption='Profile' />
            <li onClick={handleLogout} className="button-link">
              <i className='fa-solid fa-lock'></i> Logout
            </li>
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
        <Link to='/cart'>
          Total: <span>${total.toLocaleString()}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
