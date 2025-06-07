import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import "./Login.css"

const Login = () => {
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [error, setError] = useState('');

  const { token, login } = useContext(UserContext);
  const navigate = useNavigate();

  if (token) return <Navigate to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!logEmail || !logPassword) {
      alert('Error: Todos los campos son obligatorios');
      return;
    }

    if (logPassword.length < 6) {
      alert('Error: Password debe tener más de 6 caracteres');
      return;
    }

    const success = await login({ email: logEmail, password: logPassword });

    if (success) {
      navigate('/profile');
    } else {
      setError('Credenciales inválidas.');
    }
  };

  return (
    <section className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={logEmail}
          onChange={(e) => setLogEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={logPassword}
          onChange={(e) => setLogPassword(e.target.value)}
        />
        <button>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </section>
  );
};

export default Login;
