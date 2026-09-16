# Generation

The `generation/` directory is reserved for content and AI generation workflows within AI-MASK Web Agent.

This layer is intended to coordinate the process of turning an agent request into generated content while keeping generation-specific logic separate from providers and the core application.

## Responsibilities

The generation layer may contain:

- Generation request handling
- Generation workflow definitions
- Input preparation
- Output processing
- Generation parameters
- Generation result handling
- Generation validation

## Request Flow

A future generation workflow may follow a structure such as:

```text
Agent Request
    ↓
Generation Preparation
    ↓
Model Selection
    ↓
Provider Request
    ↓
Generated Result
    ↓
Output Processing
```

The exact workflow will be defined when real generation functionality is introduced.

## Provider Separation

Generation logic should not contain provider-specific API communication.

Provider communication belongs in:

`providers/`

Model definitions belong in:

`models/`

Core agent logic belongs in:

`core/`

The generation layer should coordinate these components without unnecessarily coupling them together.

## Input Handling

Generation workflows should validate and prepare input before sending requests to an external model.

Future validation may include:

- Request format
- Required parameters
- Supported capabilities
- Input size limits
- Model compatibility
- Provider requirements

Invalid requests should be rejected before unnecessary external processing occurs.

## Output Handling

Generated results should be processed into a predictable structure before being returned to the rest of the application.

Future output processing may include:

- Result validation
- Response normalization
- Metadata handling
- Error handling
- Output formatting

The generation layer should avoid exposing provider-specific response formats to unrelated application components.

## Current Status

The `generation/` directory is currently a reserved foundation.

No production generation workflow is finalized yet.

The current application only acknowledges agent requests through the basic `/api/agent` endpoint.

Real AI generation will be introduced after the provider and model layers are defined.

## Development Principle

Build generation workflows incrementally.

Keep generation logic modular, testable, and independent from individual providers.

Avoid implementing complex pipelines or generation abstractions until they are required.
