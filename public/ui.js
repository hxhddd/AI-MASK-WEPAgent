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

function updateAgentStatus(status) {
  const statusElement = document.querySelector("#agent-status");

  if (!statusElement) {
    return;
  }

  statusElement.textContent = status || "Ready";
}

function updateAgentOutputType(type) {
  const outputTypeElement =
    document.querySelector("#agent-output-type");

  if (!outputTypeElement) {
    return;
  }

  outputTypeElement.textContent = type || "Response";
}

function resetAgentUI() {
  updateAgentStatus("Ready");
  updateAgentOutputType("Response");
}

document.addEventListener("DOMContentLoaded", () => {
  initializeUI();
  resetAgentUI();
});
