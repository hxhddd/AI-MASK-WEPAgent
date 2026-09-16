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

// --------------------------------------------------
// Agent UI Helpers
// --------------------------------------------------

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

// --------------------------------------------------
// Agent API
// --------------------------------------------------

async function sendAgentRequest(request) {
  const response = await fetch("/api/agent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      request
    })
  });

  let data;

  try {
    data = await response.json();
  } catch (error) {
    throw new Error("Invalid server response");
  }

  if (!response.ok) {
    throw new Error(
      data.error || "Agent request failed"
    );
  }

  return data;
}

// --------------------------------------------------
// Agent Request Processing
// --------------------------------------------------

async function processAgentRequest(request) {
  setAgentStatus("Processing...");
  setAgentProcessing(true);

  try {
    const data = await sendAgentRequest(request);

    if (data.message) {
      setAgentOutput(data.message);
    } else {
      setAgentOutput("Agent request received.");
    }

    setAgentStatus("Ready");
  } catch (error) {
    console.error("Agent request error:", error);

    setAgentOutput(
      error.message || "An error occurred while processing the request."
    );

    setAgentStatus("Error");
  } finally {
    setAgentProcessing(false);
  }
}

// --------------------------------------------------
// Agent Input
// --------------------------------------------------

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

    inputElement.focus();
  });

  inputElement.addEventListener("keydown", (event) => {
    if (
      event.key === "Enter" &&
      (event.ctrlKey || event.metaKey)
    ) {
      event.preventDefault();

      if (!submitElement.disabled) {
        submitElement.click();
      }
    }
  });
}

// --------------------------------------------------
// Initial Application Setup
// --------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  loadSystemStatus();
  initializeAgentInput();
});
