# Providers

The `providers/` directory contains integrations between AI-MASK Web Agent and external AI or service providers.

Providers are responsible for communicating with external services while keeping provider-specific implementation separate from the core application logic.

## Responsibilities

A provider may handle:

- Provider API communication
- Request and response translation
- Provider-specific configuration
- Provider-specific capabilities
- Provider-specific error handling

## Provider Independence

Provider implementations should remain separate from the core application whenever practical.

The core system should not need to contain provider-specific API logic.

A provider should translate external provider behavior into a form that the AI-MASK system can use.

## Multiple Providers

The project may support multiple providers in the future.

Possible provider categories include:

- AI model providers
- Search providers
- Storage providers
- External service providers
- Tool providers

The exact provider architecture will be defined when real integrations are required.

## Credentials

Provider credentials must never be hard-coded or committed to the repository.

Use environment variables or an appropriate secure secret-management system.

Public frontend files must not contain private provider credentials.

## Current Status

The `providers/` directory is currently a reserved foundation.

No external provider integration is finalized yet.

New provider implementations should only be added when they are required by the project.

## Development Principle

Keep provider integrations isolated, replaceable, and easy to test.

Avoid coupling the core system directly to a single external provider.
