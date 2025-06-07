import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import "./Register.css"

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { token, register } = useContext(UserContext);
  const navigate = useNavigate();

  if (token) return <Navigate to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert('Error: Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      alert('Error: La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Error: Las contraseñas no coinciden.');
      return;
    }

    const success = await register({ email, password });

    if (success) {
      navigate('/profile');
    } else {
      setError('No se pudo completar el registro.');
    }
  };

  return (
    <>
      <section className="register">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Create your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button>Register</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </section>
    </>
  );
};

export default Register;
