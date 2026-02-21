import express from "express";
import cors from "cors";

const app = express();

// Allow requests from your Vercel site
app.use(
    cors({
        origin: "https://proactive-lifestyle.vercel.app",
    })
);

app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Backend working 🚀");
});

// CONTACT ROUTE
app.post("/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !message) {
        return res.status(400).json({
            success: false,
            code: "MISSIN_REQUIRED_FIELDS",
        });
    }

    try {
        // 👉 Here you can send email / store in DB

        console.log("New Contact Request:");
        console.log({ name, email, phone, message });

        return res.json({
            success: true,
            message: "Message received successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            code: "EMAIL_SEND_FAILED",
        });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});