import './Navbar.css'
import Boton from '../../../../../../../React/Modulo - React I/PizzeriaMMProject/src/components/common/Boton/Boton';

const Navbar = () =>{
    const total=25000;
    const token = false;

    return(
        <>
            <div className="nv-container">
                <ul>
                    <li>Pizzeria Mamma Mia!</li>
                        <Boton href={''} icon={'fa-solid fa-pizza-slice'} menuOption="Home"></Boton>
                    {token ? (
                        <>
                        <Boton href={''} icon={'fa-solid fa-unlock'} menuOption={'Profile'}></Boton>
                        <Boton href={''} icon={'fa-solid fa-lock'} menuOption={'Logout'}></Boton>
                        </>                        
                    ) : (
                        <>
                        <Boton href={''} icon={'fa-solid fa-key'} menuOption={'Login'}></Boton>
                        <Boton href={''} icon={'fa-solid fa-key'} menuOption={'Register'}></Boton>
                        </>  
                    )}
                </ul>
                <div className='nv-cart'><i className={'fa-solid fa-cart-shopping'}></i>
                <a href={''}>Total: <span>${total.toLocaleString()}</span></a></div>
            </div>
        </>
    )
}

export default Navbar;