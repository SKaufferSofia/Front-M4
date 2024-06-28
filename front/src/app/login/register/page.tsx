import Footer from "@/components/footer/Footer";
import RegisterForm from "@/components/forms/register/Register";

const Register = () => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <video autoPlay muted loop className="video-background filer">
          <source src="/login-backgroud.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <RegisterForm />
      </div>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Register;
