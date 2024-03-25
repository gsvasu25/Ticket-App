import React from 'react';
import { Container, Navbar, Nav, Form, FormControl, Button, Row, Col } from 'react-bootstrap';

const LatestMovies = () => {
  // Function to generate dynamic divs
  const generateDivs = () => {
    const divs = [];
    // Example data, you can replace this with your actual movie data
    const movies = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
      { id: 3, title: 'Movie 3' },
      { id: 4, title: 'Movie 4' },
      { id: 5, title: 'Movie 5' },
      { id: 6, title: 'Movie 6' },
      { id: 7, title: 'Movie 7' },
      { id: 8, title: 'Movie 8' },
      { id: 9, title: 'Movie 9' },
    ];

    // Chunk movies array into groups of 6
    const chunkedMovies = [];
    for (let i = 0; i < movies.length; i += 6) {
      chunkedMovies.push(movies.slice(i, i + 6));
    }

    // Generate divs
    chunkedMovies.forEach((row, rowIndex) => {
        const cols = row.map(movie => (
            <Col key={movie.id} xs={2} className="mb-4">
            <div style={{ width: '200px', height: '250px', background: '#f0f0f0', padding: '10px', position: 'relative' }}>
              <h5>{movie.title}</h5>
              <Button variant="primary" className="position-absolute bottom-0 start-0 w-100">Book</Button>
            </div>
          </Col>
        ));
        divs.push(
          <Row key={rowIndex} className="mb-3">
            {cols}
          </Row>
        );
      });
  
      return divs;
    };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="mb-4">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="ms-auto d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                style={{ width: '200px' }} // Adjust width here
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Latest Movies */}
      <Container id="latest-movies" className="mt-4">
        <h2>Latest Movies</h2>
        {generateDivs()}
      </Container>
    </div>
  );
};

export default LatestMovies;
