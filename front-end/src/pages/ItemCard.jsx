import {Card, Button} from 'react-bootstrap';

function CatalogueCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn2.yamaha-motor.eu/prod/product-assets/2024/YZF600R6RCOMP/2024-Yamaha-YZF600R6RCOMP-EU-Tech_Black-Studio-001-03.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CatalogueCard