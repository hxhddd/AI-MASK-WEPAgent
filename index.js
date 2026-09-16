const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// Basic system status
app.get("/api/status", (req, res) => {
  res.json({
    name: "AI-MASK Web Agent",
    status: "online",
    version: "0.1.0"
  });
});

// Fallback to the main web page
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`AI-MASK Web Agent running on port ${PORT}`);
});
