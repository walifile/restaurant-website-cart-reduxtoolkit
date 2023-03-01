import React from "react";
import Navbar from "../components/Home/Navbar";
import Header from "../components/Home/Header";
import About from "../components/Home/About";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/Products";
import Review from "../components/Home/Review";
import Contact from "../components/Home/Contact";
import Blog from "../components/Home/Blog";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
