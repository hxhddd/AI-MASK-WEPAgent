function initializeUI() {
  const appNameElement = document.querySelector("#app-name");

  if (appNameElement && typeof AIMASK_CONFIG !== "undefined") {
    appNameElement.textContent = AIMASK_CONFIG.appName;
  }
}

document.addEventListener("DOMContentLoaded", initializeUI);
