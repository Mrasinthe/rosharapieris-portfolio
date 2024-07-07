import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import "./App.css";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <Router>
      <div className="App">
        <Navbar searchTerm={searchTerm} handleSearch={handleSearch} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/portfolio"
              element={<Portfolio searchTerm={searchTerm} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
