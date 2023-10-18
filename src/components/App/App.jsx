import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import MentionsLegales from "../Footer/MentionsLegales/MentionsLegales";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route path="/christian-humbert-portfolio" element={<HomePage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
