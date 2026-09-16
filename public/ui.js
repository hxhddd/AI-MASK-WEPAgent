function initializeUI() {
  const appNameElement = document.querySelector("#app-name");

  if (!appNameElement) {
    return;
  }

  if (typeof AIMASK_CONFIG === "undefined") {
    return;
  }

  appNameElement.textContent =
    AIMASK_CONFIG.appName || "AI-MASK Web Agent";
}

document.addEventListener("DOMContentLoaded", initializeUI);
