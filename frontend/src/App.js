import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./compenents/Navbar";
import Hero from "./compenents/Hero";
import About from "./compenents/About";
import Skills from "./compenents/Skills";
import Experience from "./compenents/Experience";
import Projects from "./compenents/Projects";
import Contact from "./compenents/Contact";

import Signup from "./pages/Signup";
import Login from "./pages/Login";


const LayoutWrapper = ({ children }) => {
  const location = useLocation();
  const noNavbarRoutes = ["/", "/login", "/signup"];

  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/portfolio"
            element={
              <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
              </main>
            }
          />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
}

export default App;
