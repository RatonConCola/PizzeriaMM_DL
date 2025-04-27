import { useState } from 'react';
import './Register.css'


const Register = () =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
    

    if(!email || !password || !confirmPassword){
        alert('Error: Todos los campos son obligatorios.');
        return;
    }

    if (password.length < 6){
        alert('Error: La contraseña debe tener al menos 6 caracteres.');
        return;
    }

    if (password !== confirmPassword){
        alert('Error: Las contraseñas no coinciden.')
        return;
    }

    alert('Exito: Registro completado.');
};

    return(
        <>
            <section className='register'>
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="">Password</label>
                    <input type="text" placeholder='Create your password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="">Confirm Password</label>
                    <input type="text"  placeholder='Confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    <button>Register</button>
                </form>
            </section>
        </>    
    );
};

export default Register;