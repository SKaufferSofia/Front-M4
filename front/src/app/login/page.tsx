"use client";

import Footer from "@/components/footer/Footer";
import LoginForm from "@/components/forms/login/Login";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <video autoPlay muted loop className="video-background filer">
          <source src="/login-backgroud.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <LoginForm />
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
