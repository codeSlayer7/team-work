import React from "react";
import Brands from "../components/Home/Brands";
import DragAndDrop from "../components/Home/DragAndDrop";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <DragAndDrop />
    </>
  );
};

export default Home;
