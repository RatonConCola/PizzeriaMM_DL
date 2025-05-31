import { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';



const Login = () =>{

    const [logEmail, setLogEmail] = useState('');
    const [logPassword, setLogPassword] = useState('');
    
    const { token } = useContext(UserContext);
    if (token) return <Navigate to="/" />;


    const handleSubmit = (e) =>{
        e.preventDefault();

        if (!logEmail || !logPassword){
            alert('Error: Todos los campos son obligatorios');
        } else if (logPassword.length < 6){
            alert('Error: Password debe tener mas de 6 caracteres');
        } else{
            alert('Éxito: Ingreso completado');
        }
    }

    return(
        <>
            <section className='login'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' value={logEmail} onChange={(e)=> setLogEmail(e.target.value)} />
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='Enter your password'  value={logPassword} onChange={(e)=> setLogPassword(e.target.value)} />
                    <button>Login</button>
                </form>
            </section>
        </>    
    );
};

export default Login;