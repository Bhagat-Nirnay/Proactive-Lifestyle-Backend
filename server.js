import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

// Root route (IMPORTANT)
app.get("/", (req, res) => {
    res.send("Backend is LIVE 🚀");
});

app.post("/contact", (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
        return res.status(400).json({
            code: "MISSIN_REQUIRED_FIELDS",
        });
    }

    console.log("Contact form:", req.body);

    res.json({
        success: true,
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});