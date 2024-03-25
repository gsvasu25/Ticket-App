import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import LatestMovies from "./components/latestmovies";
import MovieDetails from "./components/moviedetails";
import TicketBooking from "./components/ticketbooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="latest-movies" element={<LatestMovies />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="/ticket-booking" element={<TicketBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
