import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./components/body-component/BodyComponent";
import Footer from "./components/footer/Footer";
import HeaderComponent from "./components/header/HeaderComponent";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
