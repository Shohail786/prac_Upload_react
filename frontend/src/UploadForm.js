import React, { useState } from "react";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", file);
    formData.append("title", title);
    formData.append("description", description);

    try {
      await axios.post("http://localhost:5000/upload", formData);
      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error fetching photo details:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Upload the File</p>
      <input type="file" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadForm;
