# Queue

The `queue/` directory is reserved for request and job queue functionality within AI-MASK Web Agent.

This layer is intended to provide a controlled way to manage work that may need to be processed immediately, asynchronously, or in a defined order.

## Responsibilities

The queue layer may contain:

- Request queuing
- Job creation
- Job status tracking
- Processing order
- Queue state management
- Retry handling
- Job completion handling
- Failed job handling

## Request Flow

A future queue workflow may follow a structure such as:

```text
Agent Request
    ↓
Queue Job
    ↓
Waiting
    ↓
Processing
    ↓
Completed / Failed
```

The exact queue behavior will be defined when asynchronous processing is required.

## Job States

Future queue jobs may use states such as:

- Pending
- Processing
- Completed
- Failed
- Cancelled

The final state model will be defined when the queue implementation is introduced.

## Retry Handling

Queue processing may support retries for temporary failures.

Retry behavior should distinguish between:

- Temporary failures
- Permanent failures
- Invalid requests
- Provider failures
- System failures

Invalid requests should not be retried indefinitely.

## Processing

Queue processing should remain separate from provider-specific communication.

Provider integrations belong in:

`providers/`

Generation workflows belong in:

`generation/`

Agent and application logic belongs in:

`core/`

The queue layer should manage work state and processing flow without unnecessarily coupling itself to a specific provider or model.

## Current Status

The `queue/` directory is currently a reserved foundation.

No production queue implementation is finalized yet.

The current application processes agent requests directly through the basic `/api/agent` endpoint.

Queue-based processing can be introduced when asynchronous or multi-step workloads require it.

## Development Principle

Keep queue behavior predictable, observable, and recoverable.

Avoid introducing external queue services, workers, persistence layers, or complex scheduling mechanisms until they are actually required.
