import React from "react";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";

const MovieDetails = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          {/* Add more Navbar content if needed */}
        </Container>
      </Navbar>

      {/* Movie Section */}
      <Container className="mt-4">
        <Row>
          {/* Image Column */}
          <Col xs={12} md={6}>
            <img src="image-url" alt="Movie Poster" style={{ width: "100%" }} />
          </Col>
          {/* Movie Details Column */}
          <Col xs={12} md={6}>
            <Row>
              {/* Movie Name Column */}
              <Col>
                <h3>Movie Name</h3>
              </Col>
              {/* Release Date Column */}
              <Col>
                <p>Release Date: January 1, 2023</p>
              </Col>
            </Row>
            <Row>
              {/* Duration Column */}
              <Col>
                <p>Duration: 2h 30min</p>
              </Col>
            </Row>
            <Row>
              {/* Rating Column */}
              <Col>
                <p>Rating: 4.5/5</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* Book Now Button */}
      <Container className="text-center mt-4">
        <Button variant="primary" size="lg" block>
          Book Now
        </Button>
      </Container>
    </div>
  );
};

export default MovieDetails;
