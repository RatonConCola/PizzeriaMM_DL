import { Link } from 'react-router-dom';
import './BotonNav.css';


const BotonNav = ({ to, icon, menuOption }) => {
  return (
    <div className='button'>
      <Link to={to}>
        <i className={icon}></i>
        {menuOption}
      </Link>
    </div>
  );
};

export default BotonNav;
