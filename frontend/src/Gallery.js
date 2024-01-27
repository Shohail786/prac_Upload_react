import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/photos");
        setPhotos(response.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id}>
          <Link to={`/photo/${photo.id}`}>
            <img
              src={`http://localhost:5000/${photo.photoPath}`}
              alt={photo.title}
            />
          </Link>
          <div className="Text1">
            <p>Name: {photo.title}</p>
            <hr />
            <p>About: {photo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
