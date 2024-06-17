import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/motorcycle_news/${id}`)
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error fetching news details:", error));
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="py-4 text-white">
      <Button onClick={() => navigate(-1)} className="mb-3">
        Back
      </Button>
      <Row>
        <Col md={6}>
          <div
            className="article-details"
            style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <img
              src={news.image_url}
              alt={news.title}
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        </Col>
        <Col md={6}>
          <div
            className="article-details"
            style={{ padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          >
            <h2
              className="mb-4"
              style={{ fontWeight: "bold", fontSize: "2.5rem" }}
            >
              <u>{news.title}</u>
            </h2>
            <p
              className="description mb-4"
              style={{
                fontWeight: "bold",
                fontSize: "1.6rem",
                textDecoration: "underline",
              }}
            >
              {news.description}
            </p>
            <div
              className="content"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              <p>{news.content}</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
