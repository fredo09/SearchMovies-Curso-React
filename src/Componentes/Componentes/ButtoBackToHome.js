import React from 'react';
import { Link } from 'react-router-dom';

const Button_Back = () => {
    return(
        <Link to="/" className="button is-info">
            Volver
        </Link>
    );
}

export default Button_Back;