import express from "express";
import cors from "cors";

const app = express();

// Allow Vercel frontend to access backend
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// Example contact form endpoint
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log(name, email, message);

  res.json({ success: true, message: "Form received" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});