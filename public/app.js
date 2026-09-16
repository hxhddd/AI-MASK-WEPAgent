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

function initializeAgentInput() {
  const inputElement = document.querySelector("#agent-input");
  const submitElement = document.querySelector("#agent-submit");
  const outputElement = document.querySelector("#agent-output");

  if (!inputElement || !submitElement || !outputElement) {
    return;
  }

  submitElement.addEventListener("click", () => {
    const request = inputElement.value.trim();

    if (!request) {
      return;
    }

    outputElement.textContent = request;
    console.log("Agent request:", request);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadSystemStatus();
  initializeAgentInput();
});
