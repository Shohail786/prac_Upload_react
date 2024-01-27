import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PhotoDetails = () => {
  const [photo, setPhoto] = useState({});
  const { id } = useParams();
  console.log("id", id);
  useEffect(() => {
    const fetchPhoto = async () => {
      const photoId = id;

      try {
        const response = await axios.get(
          `http://localhost:5000/photos/${photoId}`
        );
        console.log("res ", response);
        setPhoto(response.data);
      } catch (error) {
        console.error("Error fetching photo details:", error);
      }
    };

    fetchPhoto();
  }, [id]);

  return (
    <div className="photo">
      <img src={`http://localhost:5000/${photo.photoPath}`} alt={photo.title} />
      <div className="photoPara">
        <p>Name: {photo.title}</p>
        <p>About: {photo.description}</p>
      </div>
      <button className="photoBtn">
        <Link to="/gallery">Back to Gallery</Link>
      </button>
    </div>
  );
};

export default PhotoDetails;
