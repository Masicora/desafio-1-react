import React from "react";
import Button from "react-bootstrap/Button";

function Footer({ titulo }) {
    return (
        <div>
            <hr />
            <h1>{titulo}</h1>
            <Button>Volver a la página de Inicio</Button>
        </div>
    );
}

export default Footer;