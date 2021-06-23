import React from 'react';
import { Card } from 'react-bootstrap';

function Pin(props) {
  return (
    <Card style={{ width: '18rem', margin: '15px' }}>
      <Card.Img src={props.image} alt={props.alt} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.author}</Card.Text>
        <Card.Text>{props.description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Pin;
