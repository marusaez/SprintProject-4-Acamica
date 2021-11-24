import React from 'react'
import { Link } from "react-router-dom";


const Register = () => {
    return ( 
        <div>
            <p>Por favor ingresa tus datos para registrarte en nuestro portal:</p>
            <form>
                <input type="text" name="Name" placeholder="Nombre y apellido"/>
                <hr />
                <input type="email" name="Mail" placeholder="Mail"/>
                <hr />
                <input type="password" name="password" placeholder="Contraseña" />
                <hr />
                <input type="submit" value="Registrar datos" />
                <hr />
                <Link to="/">Volver al Home</Link>
            </form>
        </div>
     );
}
 
export default Register;