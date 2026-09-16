async function loadSystemStatus() {
  try {
    const response = await fetch("/api/status");

    if (!response.ok) {
      throw new Error("Failed to load system status");
    }

    const data = await response.json();

    const statusElement = document.querySelector("#system-status");

    if (statusElement) {
      statusElement.textContent = data.status;
    }
  } catch (error) {
    console.error("System status error:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadSystemStatus);
