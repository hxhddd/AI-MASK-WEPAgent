function initializeUI() {
  const appNameElement = document.querySelector("#app-name");
  const versionElement = document.querySelector("#app-version");
  const environmentElement = document.querySelector("#app-environment");

  if (typeof AIMASK_CONFIG === "undefined") {
    return;
  }

  if (appNameElement) {
    appNameElement.textContent =
      AIMASK_CONFIG.appName || "AI-MASK Web Agent";
  }

  if (versionElement) {
    versionElement.textContent =
      AIMASK_CONFIG.version || "unknown";
  }

  if (environmentElement) {
    environmentElement.textContent =
      AIMASK_CONFIG.environment || "unknown";
  }
}

function initializeAgentDisplay() {
  const statusElement = document.querySelector("#agent-status");
  const outputElement = document.querySelector("#agent-output");

  if (typeof AIMASK_CONFIG === "undefined") {
    return;
  }

  if (statusElement) {
    statusElement.textContent =
      AIMASK_CONFIG.agent?.defaultStatus || "Ready";
  }

  if (outputElement) {
    outputElement.textContent = "No response yet.";
  }
}

function updateAgentStatus(status) {
  const statusElement = document.querySelector("#agent-status");

  if (!statusElement) {
    return;
  }

  statusElement.textContent = status;
}

function updateAgentOutput(message) {
  const outputElement = document.querySelector("#agent-output");

  if (!outputElement) {
    return;
  }

  outputElement.textContent = message;
}

function initializeUIEvents() {
  document.addEventListener("agent:status", (event) => {
    if (event.detail?.status) {
      updateAgentStatus(event.detail.status);
    }
  });

  document.addEventListener("agent:output", (event) => {
    if (typeof event.detail?.message === "string") {
      updateAgentOutput(event.detail.message);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeUI();
  initializeAgentDisplay();
  initializeUIEvents();
});
