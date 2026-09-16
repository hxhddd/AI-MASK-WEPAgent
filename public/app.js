async function loadSystemStatus() {
  const statusElement = document.querySelector("#system-status");

  if (!statusElement) {
    return;
  }

  try {
    const response = await fetch("/api/status");

    if (!response.ok) {
      throw new Error("Failed to load system status");
    }

    const data = await response.json();

    statusElement.textContent = data.status || "unknown";
  } catch (error) {
    console.error("System status error:", error);
    statusElement.textContent = "offline";
  }
}

document.addEventListener("DOMContentLoaded", loadSystemStatus);
