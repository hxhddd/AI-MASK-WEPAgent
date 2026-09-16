AI-MASK Universal Agent Rules

1. Project Identity

This repository is the foundation of the AI-MASK Web Agent project.

The project architecture is currently provisional and may change as the project develops.

Agents must follow the current repository structure and the user's latest instructions.

---

2. User Has Final Authority

The user is the final decision-maker for this repository.

When instructions from the user conflict with assumptions made by an agent, follow the user's instructions.

Do not make major architectural decisions on behalf of the user without asking first.

---

3. Ask Before Destructive Changes

Before performing any action that may:

- delete files or folders
- overwrite existing code
- replace a working implementation
- rename important files or directories
- remove existing functionality
- change the project's architecture
- modify deployment configuration
- change authentication or security configuration
- migrate or restructure a significant part of the project

the agent must clearly explain what it intends to change and ask the user for confirmation first.

Do not assume that permission to edit the repository means permission to destroy or replace existing work.

---

4. Safe Changes

Small, non-destructive changes may be made when they are clearly required by the user's request.

Examples:

- adding a new file
- adding a placeholder
- adding documentation
- fixing an obvious syntax error
- making a small change explicitly requested by the user
- adding tests related to requested functionality

When uncertain whether a change is destructive or significant, ask the user first.

---

5. Do Not Overdesign

Do not create complex architecture, abstractions, frameworks, services, databases, APIs, or workflows unless they are actually required.

The current folder structure is intentionally a reserved foundation.

Empty or placeholder directories are allowed.

Do not assume that a placeholder directory already has a finalized purpose.

---

6. Preserve Existing Work

Treat existing code and files as intentional unless there is clear evidence otherwise.

Before modifying an existing implementation:

1. inspect the relevant file
2. understand what it currently does
3. identify what will change
4. preserve unrelated functionality

Do not replace an entire file when a smaller change is sufficient.

---

7. Secrets and Security

Never expose, commit, print, or hard-code:

- API keys
- access tokens
- passwords
- private keys
- authentication credentials
- private environment variables
- other sensitive secrets

Use environment variables or the appropriate secret-management mechanism.

If a requested change appears to expose a secret, stop and ask the user.

---

8. Repository Structure

The current structure is provisional:

- "core/"
- "providers/"
- "models/"
- "vault/"
- "generation/"
- "queue/"
- "orchestration/"
- "ui/"
- "public/"

Additional files may exist at the repository root.

Do not reorganize these directories unless the user explicitly requests it or confirms the proposed change.

---

9. Verification

After making code changes:

1. check the changed files
2. verify syntax where applicable
3. run available tests or build checks when practical
4. report what was changed
5. report what was verified
6. clearly mention anything that could not be verified

Do not claim that something works unless it has actually been checked or the limitation is clearly stated.

---

10. Multiple Agents

Multiple AI agents may work on this repository.

Agents must:

- avoid overwriting unrelated work
- inspect the current state before editing
- keep changes within their assigned task
- avoid deleting another agent's work
- clearly identify files they modify

If another agent appears to be modifying the same important files, stop and coordinate before overwriting its changes.

---

11. Communication

Keep explanations clear and practical.

When a significant decision is required, present:

- what needs to change
- why it needs to change
- which files will be affected
- possible risks

Then ask the user for confirmation.

Do not hide significant changes inside unrelated work.

---

12. Current Development Principle

AI-MASK is being built incrementally.

Build only what is currently needed.

Reserve space for future capabilities without prematurely implementing them.

The repository should remain understandable, reversible, and easy to expand.

---

13. Priority

When determining what to do, use this priority:

1. User's latest explicit instruction
2. Repository safety and preservation
3. Existing project requirements
4. These general agent rules
5. Agent assumptions

When something is unclear and the decision could materially affect the project, ask the user before proceeding.
