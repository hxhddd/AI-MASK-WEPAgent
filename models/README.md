# Models

The `models/` directory contains model definitions and model-related configuration for AI-MASK Web Agent.

This layer is responsible for describing models in a way that can be used by the agent system without coupling the core logic to a specific provider.

## Responsibilities

The model layer may contain:

- Model identifiers
- Model capabilities
- Model configuration
- Model metadata
- Model selection information
- Model-specific limits and requirements

## Provider Separation

Models and providers should remain separate concepts.

A provider represents the external service that supplies a model.

A model represents the specific AI capability that the system intends to use.

For example, one provider may expose multiple models, and different providers may expose models with similar capabilities.

Provider-specific API communication belongs in:

```text
providers/
```

Core application logic belongs in:

```text
core/
```

## Model Selection

The project may support selecting models based on:

- Requested capability
- Provider availability
- Model configuration
- Request requirements
- Cost or resource constraints
- Availability and compatibility

The exact selection mechanism will be defined when real model integrations are introduced.

## Model Configuration

Model configuration must not contain private credentials.

API keys, access tokens, passwords, and other secrets must remain outside the repository.

Model configuration may reference environment variables or secure configuration systems when required.

## Multiple Models

AI-MASK may support multiple models simultaneously.

The architecture should allow models to be added, replaced, or disabled without requiring unnecessary changes to unrelated core functionality.

No single model should be treated as permanently required unless the project explicitly defines it as such.

## Current Status

The `models/` directory is currently a reserved foundation.

No specific AI model is finalized yet.

Model definitions should be introduced when an actual provider integration or model-selection requirement exists.

## Development Principle

Keep model definitions clear, portable, and independent from provider-specific implementation.

Avoid creating complex model registries, routing systems, or abstractions until they are required.
