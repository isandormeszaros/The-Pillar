import React from "react";
import Hero from "./Hero";
import OurStory from "./OurStory";
import FamousWatches from "./FamousWatches";
import Partner from "./Partner";
import TheNews from "./TheNews";
import LatestBlog from "./LatestBlog";
import PreOwned from "./PreOwned";
import "../../index.css"
import Newsletter from "./Newsletter";

const Home = () => {
  return (
    <div>
      <Hero />
      <OurStory />
      <FamousWatches />
      <Partner />
      <TheNews />
      <LatestBlog />
      <PreOwned />
      <Newsletter />
    </div>
  );
};

export default Home;
