import React from "react";
import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import "./Home.css";

import img1 from "../assets/images/artyom-kabajev-img1.jpg";
import img2 from "../assets/images/ceyda-ciftci-img2.jpg";
import img3 from "../assets/images/kelina-cyril-img3.jpg";
import img4 from "../assets/images/olena-sergienko-img4.jpg";
import img5 from "../assets/images/sven-brandsma-img5.jpg";
import img6 from "../assets/images/xavier-mitjans-canyelles-img6.jpg";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src={img1}
          title="Lovely Home"
          description="A lovely cozy appartment next to the main bike path."
          price="£80/night"
        />
        <Card
          src={img2}
          title="Riverside Appartment"
          description="A warm well decorated appartment along the river."
          price="£150/night"
        />
        <Card
          src={img3}
          title="Downtown Appartment"
          description="A cute appartment in the center of town next to all the lively bars and restaurants."
          price="£95/night"
        />
      </div>
      <div className="home__section">
        <Card
          src={img4}
          title="Rainwater Gardens"
          description="A charming appartment next to the city's iconic Rainwater Gardens."
          price="£250/night"
        />
        <Card
          src={img5}
          title="College Street Flats"
          description="A lively appartment in the middle of the College district."
          price="£50/night"
        />
        <Card
          src={img6}
          title="Downbrookes Street Flats"
          description="A charasmatic appartment in the center of the Downbrookes historical district."
          price="£75/night"
        />
      </div>
    </div>
  );
};

export default Home;
