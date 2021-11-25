import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { firestore, auth } from '../firebase';
import {useProtectedContext} from "./Protected"



const Login = () => {
    const [body, setBody] = useState({});

    let [user, setUser] = useProtectedContext();

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(body.email, body.password)
        .then((userCredential) => {
            setUser(userCredential.user)
        })
        .catch((err) => {console.error(err)})
    }

    const handleInput = (e) => {
        setBody({...body, [e.target.name] : e.target.value})
    }

    return ( 
        <div>
            {user && <h3>Te has logueado exitosamente</h3>}
            <p>Por favor ingresa tus datos para iniciar sesión:</p>
            <form onSubmit={login}>
                <input onChange={handleInput} type="email" name="email" placeholder="Mail"/>
                <hr />
                <input onChange={handleInput} name="password" placeholder="Contraseña" />
                <hr />
                <input type="submit" value="Ingresar" />
                <hr />
                <Link to="/">Volver al Home</Link>
            </form>
        </div>
     );
}
 
export default Login;