import LoginForm from "@/components/forms/login/Login";
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-2xl font-bold tracking-normal text-white sm:text-3xl m-2">
          YOU MUST TO BE LOGGED
          <br />
          IN TO <span className="text-pink-500"> START SHOPPING</span>
        </h2>
        <video autoPlay muted loop className="video-background filer">
          <source src="/login-backgroud.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
