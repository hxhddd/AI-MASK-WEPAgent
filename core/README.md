# Core

The `core/` directory contains the central application logic of AI-MASK Web Agent.

This directory is reserved for functionality that belongs to the agent system itself rather than a specific AI provider, model, UI component, or external service.

## Responsibilities

The core layer may contain:

- Shared application logic
- Agent request and response handling
- Common data structures
- Agent state management
- Shared validation and utility logic

## Boundaries

Core logic should remain independent from specific providers whenever practical.

Provider-specific implementations belong in:

```text
providers/
