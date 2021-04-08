import React from "react";

import Seo from "../components/Seo";
import Layout from "../components/Layout";
import Cover from "../components/home/Cover";
import About from "../components/home/About";
import Locations from "../components/home/Locations";
import Products from "../components/home/Products";
import Banner from "../components/home/Banner";

const Homepage = () => {
  return (
    <Layout>
      <Seo title="Inicio" />
      <Cover />
      <About />
      <Locations />
      <Products />
      <Banner />
    </Layout>
  );
};

export default Homepage;
