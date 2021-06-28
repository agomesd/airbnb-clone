import React from "react";
import { Button } from "@material-ui/core";
import SearchResult from "../components/SearchResult/SearchResult";
import img1 from "../assets/images/artyom-kabajev-img1.jpg";
import "./SearchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays • 26 august to 30 august • 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More</Button>
      </div>
      <SearchResult
        img={img1}
        location="Private room in the center of London"
        title="Lovely Home"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • WiFi • Kitchen • Free Parking • Washing Machine"
        star={4.73}
        price="£80 / night"
        total="£160 total"
      />
      <SearchResult
        img={img1}
        location="Private room in the center of London"
        title="Lovely Home"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bathrooms • WiFi • Kitchen • Free Parking • Washing Machine"
        star={4.73}
        price="£80 / night"
        total="£160 total"
      />
    </div>
  );
};

export default SearchPage;
