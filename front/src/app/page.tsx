import Footer from "@/components/footer/Footer";
import LandingComponent from "@/components/landing/landing";
import React from "react";

const Landing = () => {
  return (
    <div>
      <LandingComponent />
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
