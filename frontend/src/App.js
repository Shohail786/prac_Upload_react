import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadForm from "./UploadForm";
import Gallery from "./Gallery.js";
import PhotoDetails from "./PhotoDetails.js";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/upload" element={<UploadForm />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/photo/:id" element={<PhotoDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
