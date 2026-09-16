const AIMASK_CONFIG = {
  appName: "AI-MASK Web Agent",
  version: "0.1.0",

  apiBase: "/api",

  environment: "production",

  agent: {
    defaultStatus: "Ready",
    defaultOutput: "No response yet.",
    processingLabel: "Processing...",
    readyLabel: "Ready",
    errorLabel: "Error",
    defaultResponse: "Agent request received."
  },

  endpoints: {
    status: "/status",
    agent: "/agent"
  },

  ui: {
    inputPlaceholder: "Enter your request...",
    sendLabel: "Send",
    clearLabel: "Clear",
    inputHint: "Press Ctrl + Enter to send."
  },

  request: {
    method: "POST",
    contentType: "application/json"
  }
};
