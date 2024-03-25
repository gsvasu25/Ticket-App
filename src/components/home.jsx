import React from "react";
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Home = () => {
  // Function to generate repeated divs
  const generateDivs = () => {
    const divs = [];
    for (let i = 0; i < 6; i++) {
      // Generates 6 divs
      divs.push(
        <div
          key={i}
          style={{
            width: "200px",
            height: "250px",
            background: "gray",
            marginBottom: "10px",
          }}
        >
          div - {i}
        </div>
      );
    }
    return divs;
  };
  return (
    <div>
      {/* Search Bar */}
      <Container>
        <Row className="justify-content-end">
          <Col md="6">
            <Form className="d-flex" style={{ padding: "10px" }}>
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="mr-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/latest-movies">
                Latest Movies
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/upcoming-movies">
                Upcoming Movies
              </Nav.Link>
              <Nav.Link as={Link} to="/nearby-events">
                Nearby Events
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Image Slider */}
      <Container>
        <Carousel style={{ height: "300px" }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="First slide"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Second slide"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/800x400"
              alt="Third slide"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* Recommended Movies */}
      {/* Recommended Movies and Static Divs */}
      <Container className="mt-4">
        <h2>Recommended Movies</h2>
        <Row>
          {generateDivs().map((div, index) => (
            <Col key={index} xs={2}>
              {div}
            </Col>
          ))}
        </Row>
        {/* Your recommended movies component goes here */}
      </Container>
    </div>
  );
};

export default Home;
