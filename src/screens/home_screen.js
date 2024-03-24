import React from "react";
import "./home_screen.css";
import NavBar from "../nav";
import Banner from "../banner";
import requests from "../request";
import Row from "../row";

function HomeScreen() {
  return (
    <div className="homescreen">
      {/* navbar */}
      <NavBar />

      {/* baner */}
      <Banner />
      {/* row */}
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrendings} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovie} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovie} />
      <Row title="Horror Movie" fetchUrl={requests.fetchHorrowMovie} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovie} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovie} />
    </div>
  );
}

export default HomeScreen;
