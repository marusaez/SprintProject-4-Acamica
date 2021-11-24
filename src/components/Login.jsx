import React from 'react'
import { Link } from "react-router-dom";


const Login = () => {
    return ( 
        <div>
            <p>Por favor ingresa tus datos para iniciar sesión:</p>
            <form>
                <input type="email" name="email" placeholder="Mail"/>
                <hr />
                <input type="password" name="password" placeholder="Contraseña" />
                <hr />
                <input type="submit" value="Ingresar" />
                <hr />
                <Link to="/">Volver al Home</Link>
            </form>
        </div>
     );
}
 
export default Login;