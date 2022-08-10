import React from "react";
import Card from "react-bootstrap/Card";

const Tarjeta = ({ src, titulo, descripcion }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>
                    {titulo}
                </Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
export default Tarjeta;