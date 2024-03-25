import React from "react";
import { Container, Navbar, Button, InputGroup, FormControl } from "react-bootstrap";

const TicketBooking = () => {
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
      <Container className="text-center mt-4">
        <p>Date</p>
        {/* Available Show Timing */}
        <p>Available Show Timing</p>
        <div className="mb-3 p-3">
          <input type="radio" className="btn-check me-2" name="showTiming" id="option5" autoComplete="off" defaultChecked />
          <label className="btn btn-outline-primary me-2" htmlFor="option5">Checked</label>

          <input type="radio" className="btn-check me-2" name="showTiming" id="option6" autoComplete="off" />
          <label className="btn btn-outline-primary me-2" htmlFor="option6">Radio</label>

          <input type="radio" className="btn-check me-2" name="showTiming" id="option7" autoComplete="off" disabled />
          <label className="btn btn-outline-primary me-2" htmlFor="option7">Disabled</label>

          <input type="radio" className="btn-check me-2" name="showTiming" id="option8" autoComplete="off" />
          <label className="btn btn-outline-primary" htmlFor="option8">Radio</label>
        </div>
        {/* Number Of seats and Select button */}
        <p>Number Of seats</p>
        <InputGroup className="mb-3 justify-content-center">
        <FormControl
            type="number"
            min="1"
            max="10"
            placeholder="Select seats (max 10)"
            aria-label="Number of seats"
            style={{ maxWidth: "150px" }}
          />
        </InputGroup>       
      </Container>
      
      {/* Book Now Button */}
      <Container className="text-center mt-4">
        <Button variant="primary" size="lg">
          Book Now
        </Button>
      </Container>
    </div>
  );
};

export default TicketBooking;
