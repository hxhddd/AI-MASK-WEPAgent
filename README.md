# AI-MASK Web Agent

AI-MASK Web Agent is a web-based agent platform designed to provide a structured foundation for future AI agent capabilities.

The project is being developed incrementally. The current architecture is provisional and may evolve as the system grows.

## Live Website

Production website: https://ai-mask-wep-agent.vercel.app

This project is designed as a browser-first AI workflow platform where users can bring their own API keys and keep their workflow data in the browser. The concept focuses on a more user-controlled experience compared to traditional AI web apps, with generation tasks arranged in a queue-based sequence rather than sending all requests at once.

The current direction supports a workflow model where users can generate up to 4 images or 4 videos per sequence, with tasks processed in order and chained from one step to the next. This makes the system more suitable for content creators, prompt writers, and users who want to build multi-step video or image storytelling flows without relying on a centralized backend.

## Project Status

Current version: `0.1.0`

Current environment: `production`

The current implementation provides:

- Web Agent workspace
- Agent input interface
- Agent output display
- Agent status display
- Basic system status API
- Basic agent request API
- Central frontend configuration
- Vercel deployment configuration
- Browser-first workflow concept for provider-based generation

The current agent request flow is a foundation for future AI processing and provider integration.

## Project Structure

```text
AI-MASK-WEPAgent/
├── AGENTS.md
├── core/
├── providers/
├── models/
├── vault/
├── generation/
├── queue/
├── orchestration/
├── ui/
├── public/
├── index.js
├── package.json
├── vercel.json
└── README.md
```

## Workflow Direction

The project is being designed around a queue-based generation flow:

- Users provide their own API key in the browser
- The website keeps provider settings and workflow state locally in the browser
- Requests are processed in sequence instead of all-at-once
- Up to 4 images or 4 videos can be generated per workflow
- Each step can use the result of the previous step as context for the next one
- This supports story-driven or campaign-based generation workflows

This direction is intended for users who want more control, more continuity, and more predictable generation flow than a standard one-prompt AI app.

## Notes

This repository remains an active development foundation. The structure and implementation are still evolving as the AI workflow system expands.
