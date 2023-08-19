import "./App.css";
// import Home from "./components/Home";
// import Welcome from "./components/Welcome";
// import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000); // 3000 milliseconds (3 seconds)

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  return (
    <>
      {/* {isLoading ? <Welcome /> : <Home />} */}
      <Header />
      {/* <Home /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
