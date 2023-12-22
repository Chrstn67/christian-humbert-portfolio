import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import MentionsLegales from "../Footer/MentionsLegales/MentionsLegales";
import Footer from "../Footer/Footer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
