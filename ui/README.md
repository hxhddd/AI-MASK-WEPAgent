UI

The "ui/" directory is reserved for the user interface layer of AI-MASK Web Agent.

This layer is intended to define and support the interface through which users interact with the agent system.

Responsibilities

The UI layer may contain:

- User interface components
- Agent interaction components
- Input controls
- Output presentation
- Status indicators
- UI state handling
- User interaction logic

Interface Structure

A future UI structure may follow a pattern such as:

User
  ↓
UI
  ↓
Agent Request
  ↓
Core / Orchestration
  ↓
Agent Result
  ↓
UI
  ↓
User

The exact interface structure will be defined as the application develops.

Agent Interaction

The UI may provide controls for:

- Entering an agent request
- Submitting a request
- Displaying processing status
- Displaying agent results
- Handling request errors
- Clearing or resetting the current interaction

The UI should communicate with application logic through defined interfaces rather than duplicating backend responsibilities.

State

The UI may maintain temporary interface state such as:

- Current input
- Request status
- Loading state
- Current output
- Error state
- User interaction state

UI state should remain limited to information required by the interface.

Application and workflow state belongs to the appropriate backend layers.

Boundaries

The UI layer should remain separate from:

core/
providers/
models/
vault/
generation/
queue/
orchestration/

These components may provide services or data to the UI through defined application interfaces.

The UI should not contain provider-specific logic, model implementation, credential handling, or workflow orchestration.

Frontend Assets

Frontend assets may be located within:

public/

The relationship between "ui/" and "public/" will be defined as the frontend architecture becomes more established.

The project should avoid unnecessary duplication between UI logic and public frontend assets.

Error Handling

The UI should provide clear feedback when an agent operation fails.

Possible states may include:

Idle
  ↓
Submitting
  ↓
Processing
  ↓
Completed

or:

Idle
  ↓
Submitting
  ↓
Processing
  ↓
Failed

The exact presentation of these states depends on the final interface implementation.

Accessibility

Future UI components should consider basic accessibility requirements, including:

- Clear labels
- Keyboard interaction
- Readable status information
- Appropriate control semantics
- Understandable error messages

Accessibility should be considered as UI components are introduced rather than added as an unrelated layer later.

Current Status

The "ui/" directory is currently a reserved foundation.

The current application already contains a basic web interface through the "public/" directory, but the dedicated UI architecture is not yet finalized.

Development Principle

Keep the UI simple, clear, modular, and easy to maintain.

Do not introduce unnecessary frontend frameworks, component systems, state-management libraries, or design abstractions until they are required by the application.
