# Vault

The `vault/` directory is reserved for secure handling of sensitive application resources used by AI-MASK Web Agent.

This layer is intended to provide a controlled boundary between application logic and sensitive configuration or credentials.

## Responsibilities

The vault layer may eventually handle:

- API credentials
- Access tokens
- Authentication information
- Provider secrets
- Secure configuration
- Credential references
- Secret-related access control

Sensitive values must not be stored directly in source code.

## Security

The repository must never contain:

- API keys
- Access tokens
- Passwords
- Private keys
- Session secrets
- Database credentials
- Other private authentication information

Secrets should be provided through environment variables or an appropriate secure secret-management system.

## Frontend Protection

Private credentials must never be exposed through files inside `public/`.

Anything served to a web browser should be considered potentially visible to users.

Frontend configuration may contain public application settings, but it must not contain private provider credentials or authentication secrets.

## Provider Credentials

Provider-specific credentials should remain separated from provider implementation code.

Provider integrations belong in:

`providers/`

Secure credential handling belongs within the appropriate secure configuration mechanism.

The vault layer should provide access to credentials without exposing the underlying secret values unnecessarily.

## Access Control

Future vault functionality may define controlled access to sensitive resources.

Application components should only receive the credentials or secret references required for their specific operation.

Unnecessary access to sensitive resources should be avoided.

## Current Status

The `vault/` directory is currently a reserved foundation.

No production secret-management implementation is finalized yet.

The project currently relies on environment variables and deployment-level configuration for sensitive values when required.

## Development Principle

Security takes priority over convenience when handling sensitive resources.

Keep secrets outside the repository, minimize access to sensitive values, and avoid building a complex secret-management system until the project requires one.
