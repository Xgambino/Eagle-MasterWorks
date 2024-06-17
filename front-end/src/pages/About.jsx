import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Navbar from "/home/gambi/P3/P3-project/front-end/src/components/Navbar.jsx";
import "./About.css";

const teamMembers = [
  {
    name: "Patrick Caleb",
    position: "General Manager",
    description:
      "Meet Patrick, our General manager. He is the man you will find on 'the ground' ensuring the cogs & gear that make The Ultimate Motors Dealership run smoothly.",
    imageUrl:
      "https://img.freepik.com/free-photo/medium-shot-anime-style-man-portrait_23-2151067447.jpg?t=st=1717869339~exp=1717872939~hmac=2a57bdc3a9a625c419175ebad7b4fcd99328e1ed85f06bd88e6c17cee0a57a2a",
  },
  {
    name: "Jane Doe",
    position: "Sales Manager",
    description:
      "Jane oversees all the sales operations, ensuring customers get the best deals and services.",
    imageUrl:
      "https://img.freepik.com/free-photo/medium-shot-smiley-woman-white-background_23-2149160015.jpg",
  },
  {
    name: "John Smith",
    position: "Technical Lead",
    description:
      "John is our technical lead, making sure all our bikes and equipment are in top condition.",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-happy-young-man_23-2149077407.jpg",
  },
];

const AboutUs = () => {
  return (
    <Container fluid className="about-us-container">
      <Navbar />
      <Container className="about-us-section">
        <h1 className="component-name">About Us</h1>
        <div className="blog-name">
          <h1>Welcome to The Ultimate Motors Dealership</h1>
        </div>
        <p className="about-us-description">
          The Ultimate Motors Dealership is a global sourcing and shipping
          Company domiciled in Nairobi, Kenya. We export and ship new & used
          motorbikes, brand-new & used spare parts, industrial equipment and
          electronics from our primary source markets in Europe, Middle East, and
          the Orient.
        </p>

        <h3 style={{ color: "#007bff", marginTop: "30px" }}>Meet The Team</h3>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <Card className="card">
                <Card.Img
                  variant="top"
                  src={member.imageUrl}
                  alt={`Portrait of ${member.name}`}
                />
                <Card.Body>
                  <div className="content">
                    <div className="title">
                      <strong>{member.name}</strong>
                      <br />
                      <span>{member.position}</span>
                    </div>
                    <p>{member.description}</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default AboutUs;
