import React, { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import Metric from "./Metric";

const Home = ({ setPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setPage("home");
    setIsLoaded(true);
  }, [setPage]);

  return (
    <div
      className={`Home grow flex justify-between px-7 ${
        isLoaded ? "slide-in" : ""
      }`}
    >
      <div className="w-[45%] flex gap-5 flex-col justify-center">
        <h1 className="text-7xl font-bold">Providing Best Diagnosis</h1>
        <p className="text-xl font-semibold">
          Welcome to HealthCast! We're here to redefine disease diagnosis with
          state-of-the-art technology and predictive analytics. Our platform
          empowers healthcare professionals to make faster, more accurate
          decisions, ultimately improving patient outcomes. Join us in
          revolutionizing healthcare delivery!
        </p>
        <div>
          <Link
            to="/services"
            className="bg-orange-400 hover:bg-orange-500 px-6 py-2 text-white rounded mt-3 font-bold text-2xl"
          >
            Try Now
          </Link>
        </div>

        <div className="Metric flex font-semibold text-2xl justify-evenly mt-4">
          <Metric icon="fa-solid fa-check" text="Easy to use" />
          <Metric icon="fa-solid fa-bolt" text="Affordable" />
          <Metric icon="fa-solid fa-handshake-simple" text="Reliable" />
        </div>
      </div>
      <Suspense>
        <div className="Hero w-[40%] relative flex pt-5">
          <div
            className={`bg-green-500 w-[50%] rounded-t-2xl mt-5 transition-all ${
              isLoaded ? "green-slide-in" : ""
            }`}
          ></div>
          <div
            className={`bg-orange-400 w-[30%] rounded-tr-2xl mt-24 transition-all ${
              isLoaded ? "orange-slide-in" : ""
            }`}
          ></div>
          <img src="hero.png" alt="doctor" className="absolute bottom-0" />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
