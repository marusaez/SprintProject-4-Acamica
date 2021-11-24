import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <p>
        Bienvenido al home, puedes registrarte, iniciar sesión o ir directamente al timeline de tweets creados por nuestros usuarios.
      </p>
        <button>
          <Link to="/Login">Inicia sesión</Link>
        </button>
      <hr />
        <button>
          <Link to="/Register">Regístrate</Link>
        </button>
      <hr />
        <button>
          <Link to="/Tweets">Ir al timeline</Link>
        </button>
    </div>
  );
};

export default Home;
