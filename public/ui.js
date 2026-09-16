function initializeUI() {
  const appNameElement = document.querySelector("#app-name");
  const versionElement = document.querySelector("#app-version");

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
}

document.addEventListener("DOMContentLoaded", initializeUI);
