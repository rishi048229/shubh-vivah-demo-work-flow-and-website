import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  // This ensures the main site Navbar and Footer disappear on the Login page
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {!isLoginPage && <Navbar />}

      <Routes>
       <Route path="/" element={<Hero />} />
  <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;