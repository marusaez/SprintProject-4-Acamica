import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore, auth } from "../firebase";
import { useProtectedContext } from "../context/Protected";


const Register = () => {
  const [body, setBody] = useState({});
  let [user, setUser] = useProtectedContext();


  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(body.email, body.password)
      .then((userCredential) => {
        console.log(userCredential);
        let {uid, email} = userCredential.user;
        firestore
        .collection("users")
        .add({email, uid})
        .then(() => console.log("Se creó el usuario"))
        .catch((err) => console.error(err.message))
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleInput = (e) => {
    setBody({ ...body, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <p>Por favor ingresa tus datos para registrarte en nuestro portal:</p>
      <form onSubmit={register}>
        <input
          onChange={handleInput}
          type="text"
          name="name"
          placeholder="Nombre y apellido"
        />
        <hr />
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
        <input type="submit" value="Registrar datos" />
        <hr />
        <Link to="/">Volver al Home</Link>
      </form>
    </div>
  );
};

export default Register;
