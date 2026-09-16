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
