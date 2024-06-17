import React from "react";
import Card from "react-bootstrap/Card";

const MotorcycleCard = ({ type }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{type.name}</Card.Title>
        <Card.Text>{type.description}</Card.Text>
        {/* Additional details specific to motorcycle types */}
      </Card.Body>
    </Card>
  );
};

export default MotorcycleCard;
