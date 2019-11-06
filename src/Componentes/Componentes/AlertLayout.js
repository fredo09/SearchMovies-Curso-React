import React from 'react';

const AlertMessage = () => {

    return (
        <div className="notification is-danger BoxAlert">
            <button className="delete"></button>
            <p>Sin Resultados</p>
            <span>No se encontro Pelicula </span>
        </div>
    );
}

export default AlertMessage;