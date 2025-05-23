import './PNotFound.css';

const PNotFound = () => {
  return (
    <div className="nf-container">
      <h1>Error 404</h1>
      <p>Página no encontrada</p>
      <p className="sauce-joke">Sauce Not Found! 🍕</p>
      <div className="nf-line"></div>
    </div>
  );
};

export default PNotFound;
