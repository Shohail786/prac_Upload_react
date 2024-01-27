const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads"));

let photos = [];

app.post("/upload", upload.single("photo"), (req, res) => {
  const { title, description } = req.body;
  const photoPath = req.file.path;

  const newPhoto = { id: photos.length + 1, title, description, photoPath };
  photos.push(newPhoto);
  console.log(photos);
  res.json({ success: true, message: "Photo uploaded successfully" });
});

app.get("/photos", (req, res) => {
  console.log("photos", photos);
  res.json(photos);
});

app.get("/photos/:id", (req, res) => {
  const photoId = parseInt(req.params.id);
  const foundPhoto = photos.find((photo) => photo.id === photoId);

  if (foundPhoto) {
    res.json(foundPhoto);
  } else {
    res.status(404).json({ error: "Photo not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
