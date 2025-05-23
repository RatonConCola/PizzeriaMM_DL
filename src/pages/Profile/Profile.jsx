import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Mi perfil</h2>
      <div className="profile-info">
        <label>Email:</label>
        <p>usuario@ejemplo.com</p>
      </div>
      <button className="logout-button">Cerrar sesión</button>
    </div>
  );
};

export default Profile;
