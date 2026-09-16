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

function setAgentStatus(status) {
  const statusElement = document.querySelector("#agent-status");

  if (!statusElement) {
    return;
  }

  statusElement.textContent = status;
}

function setAgentOutput(message) {
  const outputElement = document.querySelector("#agent-output");

  if (!outputElement) {
    return;
  }

  outputElement.textContent = message;
}

function getAgentRequest() {
  const inputElement = document.querySelector("#agent-input");

  if (!inputElement) {
    return "";
  }

  return inputElement.value.trim();
}

function clearAgentInput() {
  const inputElement = document.querySelector("#agent-input");

  if (!inputElement) {
    return;
  }

  inputElement.value = "";
}

function setAgentProcessing(processing) {
  const submitElement = document.querySelector("#agent-submit");

  if (!submitElement) {
    return;
  }

  submitElement.disabled = processing;
}

async function processAgentRequest(request) {
  setAgentStatus("Processing...");
  setAgentProcessing(true);

  try {
    setAgentOutput(`Request received:\n\n${request}`);

    await new Promise((resolve) => {
      setTimeout(resolve, 300);
    });

    setAgentStatus("Ready");
  } catch (error) {
    console.error("Agent request error:", error);
    setAgentOutput("An error occurred while processing the request.");
    setAgentStatus("Error");
  } finally {
    setAgentProcessing(false);
  }
}

function initializeAgentInput() {
  const inputElement = document.querySelector("#agent-input");
  const submitElement = document.querySelector("#agent-submit");
  const clearElement = document.querySelector("#agent-clear");

  if (!inputElement || !submitElement || !clearElement) {
    return;
  }

  submitElement.addEventListener("click", async () => {
    const request = getAgentRequest();

    if (!request || submitElement.disabled) {
      return;
    }

    await processAgentRequest(request);
  });

  clearElement.addEventListener("click", () => {
    clearAgentInput();
    setAgentOutput("No response yet.");
    setAgentStatus("Ready");
  });

  inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      submitElement.click();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadSystemStatus();
  initializeAgentInput();
});
