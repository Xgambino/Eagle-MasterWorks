import { Container, Row, Col } from "react-bootstrap";
import ItemCard from "../pages/ItemCard";
import Navbar from "/home/gambi/P3/P3-project/front-end/src/components/Navbar.jsx";

function Catalogue() {
  return (
    <Container>
      <Navbar />
      <Row className="mt-10" style={{ marginTop: 20 }}>
        {new Array(100).fill(Math.random()).map((_, index) => (
          <Col key={index} className="mb-5">
            <ItemCard/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Catalogue;
