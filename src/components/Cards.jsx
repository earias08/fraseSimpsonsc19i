import React from "react";
import {Card, Button} from "react-bootstrap";
import comic from '../img/ComicBookGuy.png';
import {Container, Row, Col} from 'react-bootstrap';
const Cards = (props) => {
  return (
     <div className="">
        <Container className="bg-light">
            <Row>
                <Col md={4} className="text-center">
                    <Card.Img variant="top" src={props.personaje.image} alt="personaje"/>
                </Col>
                <Col md={8} className="text-center">
                    <Card.Body>
                    <Card.Title>{props.personaje.character}</Card.Title>
                    <Card.Text>
                        {props.personaje.quote}
                    </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Cards;
