const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const APP_CONFIG = {
  name: "AI-MASK Web Agent",
  version: "0.1.0",
  environment: process.env.NODE_ENV || "production"
};

// --------------------------------------------------
// Middleware
// --------------------------------------------------

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// --------------------------------------------------
// Health / System API
// --------------------------------------------------

app.get("/api/status", (req, res) => {
  res.json({
    name: APP_CONFIG.name,
    status: "online",
    version: APP_CONFIG.version,
    environment: APP_CONFIG.environment
  });
});

// --------------------------------------------------
// Agent API
// --------------------------------------------------

app.post("/api/agent", (req, res) => {
  const request = req.body?.request;

  if (!request || typeof request !== "string") {
    return res.status(400).json({
      success: false,
      error: "Agent request is required"
    });
  }

  const trimmedRequest = request.trim();

  if (!trimmedRequest) {
    return res.status(400).json({
      success: false,
      error: "Agent request cannot be empty"
    });
  }

  res.json({
    success: true,
    status: "received",
    request: trimmedRequest,
    message: "Agent request received successfully."
  });
});

// --------------------------------------------------
// API 404 Handler
// --------------------------------------------------

app.use("/api", (req, res) => {
  res.status(404).json({
    success: false,
    error: "API endpoint not found"
  });
});

// --------------------------------------------------
// Frontend Fallback
// --------------------------------------------------

app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// --------------------------------------------------
// Error Handler
// --------------------------------------------------

app.use((err, req, res, next) => {
  console.error("Server error:", err);

  if (res.headersSent) {
    return next(err);
  }

  res.status(500).json({
    success: false,
    error: "Internal server error"
  });
});

// --------------------------------------------------
// Start Server
// --------------------------------------------------

app.listen(PORT, () => {
  console.log(
    `${APP_CONFIG.name} running on port ${PORT}`
  );
});
