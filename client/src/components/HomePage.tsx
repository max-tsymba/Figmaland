import React from "react";
import TopSection from "./Section/TopSection";
// @ts-ignore
import bg from "../assets/img/bg.png";

const HomePage = () => {
  return (
    <>
      <section
        className="bg-cover bg-no-repeat h-screen bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container">
          <div className="max-w-800 mx-auto text-center">
            <TopSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
