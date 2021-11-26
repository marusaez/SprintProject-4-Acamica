import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { firestore, auth, loginGoogle, logout } from "../firebase";
import { useProtectedContext } from "./Protected";
import { AppContext } from "./AppContext";

const Login = () => {
  const { user } = useContext(AppContext);

  const [body, setBody] = useState({});

  /// LOGIN CREANDO USUARIO DE FORMA MANUAL

  //   let [user, setUser] = useProtectedContext();
  //
  //   const login = (e) => {
  // e.preventDefault();
  // auth
  //   .signInWithEmailAndPassword(body.email, body.password)
  //   .then((userCredential) => {
  // setUser(userCredential.user);
  //   })
  //   .catch((err) => {
  // console.error(err);
  //   });
  //   };

//   const handleInput = (e) => {
    // setBody({ ...body, [e.target.name]: e.target.value });
//   };



  return (
    <div>
      {user ? (
        <div>
          <img src={user.photoURL} alt="Foto de perfil" />
          <p>¡Hola {user.displayName}!</p>
          <button onCLick={logout}>Logout</button>
          <br />
          <Link to="/">Volver al Home</Link>
        </div>
      ) : (
        <div>
          <button onClick={loginGoogle}>Login con Google</button>
          <br />
          <Link to="/">Volver al Home</Link>
          {/* <p>Por favor ingresa tus datos para iniciar sesión:</p>
          <form onSubmit={loginGoogle} >
            <input
              onChange={handleInput}
              type="email"
              name="email"
              placeholder="Mail"
            />
            <hr />
            <input
              onChange={handleInput}
              name="password"
              placeholder="Contraseña"
            />
            <hr />
            <input type="submit" value="Ingresar" />
            <hr />
          </form> */}
        </div>
      )}
    </div>
  );
};

export default Login;
