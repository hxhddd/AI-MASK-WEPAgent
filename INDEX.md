# Index

The `index.js` file is the main application entry point of AI-MASK Web Agent.

It is responsible for starting the web server and connecting the browser-facing frontend with the application's backend request flow.

## Responsibilities

The application entry point may handle:

- Application startup
- Server initialization
- Middleware registration
- Static frontend serving
- API route registration
- Request validation
- API error handling
- Frontend fallback handling

The entry point should primarily connect application components rather than contain large amounts of business logic.

## Application Entry Flow

The current application entry flow follows a structure such as:

```text
Application Start
    ↓
index.js
    ↓
Express Server
    ↓
Middleware
    ↓
API / Frontend Routes
    ↓
Application Components
    ↓
Response
```

The exact flow may evolve as the application architecture develops.

## Frontend Integration

The application serves the browser-facing frontend from:

```text
public/
```

The entry point connects the HTTP server with the public frontend.

The frontend architecture itself is reserved under:

```text
ui/
```

These responsibilities should remain distinct.

## API Integration

The entry point currently exposes the basic application API.

For example:

```text
/api/status
    ↓
System Status

/api/agent
    ↓
Agent Request
```

Future API routes may connect to appropriate application layers such as:

```text
core/
orchestration/
generation/
providers/
models/
queue/
vault/
```

The entry point should avoid implementing provider-specific or complex agent logic directly.

## Middleware

The application entry point may register middleware required by the server.

Current responsibilities include handling:

- JSON request bodies
- URL-encoded request bodies
- Static frontend assets

Additional middleware should only be introduced when required.

## Request Handling

Incoming agent requests should be validated before being passed to deeper application layers.

A future request flow may follow:

```text
HTTP Request
    ↓
index.js
    ↓
Request Validation
    ↓
Core / Orchestration
    ↓
Agent Processing
    ↓
Response
```

Validation should remain focused on request-level concerns.

Business logic belongs to the appropriate application layer.

## Error Handling

The entry point should provide safe handling for unexpected server errors.

API errors should return structured responses where appropriate.

Internal errors should not expose:

- Secrets
- Credentials
- Internal configuration
- Sensitive system information
- Unnecessary implementation details

Detailed diagnostics should remain available only through appropriate server-side logging or development tooling.

## Configuration

Runtime configuration may be provided through environment variables.

Examples may include:

```text
PORT
NODE_ENV
```

Environment-specific configuration should not be hardcoded when it needs to change between deployments.

Secrets must never be placed directly inside `index.js`.

## Server Startup

The entry point is responsible for starting the application server.

The current application uses the configured port when available and falls back to the default development port when no port is provided.

The startup process should remain simple and predictable.

## Dependencies

The current server implementation uses:

```text
Express
```

Dependencies should remain limited to functionality actually required by the application.

New server dependencies should not be introduced without a clear architectural need.

## Relationship With Other Layers

The entry point connects the major application areas:

```text
index.js
    ↓
public/
    ↓
core/
    ↓
orchestration/
    ↓
generation/
    ↓
providers/
    ↓
models/
    ↓
queue/
    ↓
vault/
```

Not every request needs to pass through every layer.

Each layer should only participate when its responsibility is required.

## Current Status

The `index.js` entry point currently provides the basic Express server, frontend serving, system status API, agent request API, API 404 handling, frontend fallback, and server error handling.

The application architecture remains under development.

## Development Principle

Keep the application entry point small, explicit, and easy to trace.

Use `index.js` to connect application components rather than turning it into a large centralized business-logic layer.

As the system grows, functionality should move into the appropriate architectural layer instead of continuously expanding the entry point.
