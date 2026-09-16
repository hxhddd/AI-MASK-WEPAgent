# Public

The `public/` directory contains the frontend assets served by AI-MASK Web Agent.

This directory is intended for files that are directly delivered to the web browser as part of the application's web interface.

## Responsibilities

The public layer may contain:

- HTML documents
- CSS stylesheets
- Client-side JavaScript
- Frontend configuration
- Browser-side interface logic
- Static web assets

## Frontend Structure

The current public frontend contains components such as:

```text
public/
├── index.html
├── style.css
├── app.js
├── ui.js
└── config.js
```

Each file should remain responsible for its own defined frontend role.

## Application Flow

The public frontend may participate in an application flow such as:

```text
User
    ↓
Browser
    ↓
public/
    ↓
Frontend Interaction
    ↓
Agent Request
    ↓
Backend Application
    ↓
Agent Result
    ↓
Frontend Presentation
    ↓
User
```

The exact communication flow will be defined as the application architecture develops.

## HTML

The `index.html` file provides the main HTML structure for the web interface.

It may define:

- Page structure
- Interface elements
- Input controls
- Output containers
- References to frontend assets

HTML structure should remain focused on document and interface structure rather than backend application logic.

## CSS

The `style.css` file provides styling for the public web interface.

It may contain:

- Layout rules
- Typography
- Component styling
- Responsive behavior
- Visual states

Styling should remain separate from application and agent logic.

## Client-side JavaScript

Client-side JavaScript files may provide browser-side functionality.

For example:

```text
app.js
    ↓
Application Interaction

ui.js
    ↓
User Interface Behavior

config.js
    ↓
Frontend Configuration
```

The exact responsibilities of each JavaScript file should remain clear as the frontend develops.

## UI Relationship

The `public/` directory serves the browser-facing frontend assets, while:

```text
ui/
```

is reserved for the broader UI architecture and interface layer.

The two areas may work together, but their responsibilities should remain distinct.

The `public/` directory should not become a replacement for the dedicated UI architecture.

## Backend Communication

The public frontend may communicate with backend application components through defined interfaces.

Backend responsibilities belong to appropriate application layers such as:

```text
core/
providers/
models/
generation/
queue/
orchestration/
vault/
```

Frontend files should not contain provider-specific implementations, credential handling, or backend workflow logic.

## Configuration

Frontend configuration may be provided through:

```text
config.js
```

Configuration intended for the browser must not contain secrets or sensitive credentials.

Sensitive configuration should remain outside publicly served frontend assets.

## Static Assets

Additional frontend assets may be added when required by the application.

Possible assets may include:

- Images
- Icons
- Fonts
- Other static resources

Assets should only be added when they serve a clear application purpose.

## Current Status

The `public/` directory currently contains the basic web interface for AI-MASK Web Agent.

The frontend is functional at a basic level, while the long-term frontend architecture is still being established.

## Development Principle

Keep the public frontend simple, clear, modular, and easy to maintain.

Do not introduce unnecessary frontend frameworks, build systems, libraries, or abstractions until they are required by the application.
