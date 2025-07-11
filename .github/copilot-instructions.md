# Copilot Instructions

# This file contains instructions for Copilot to follow when generating code.

# The instructions are divided into sections, each with a specific focus.

# The sections include:

# 1. General Instructions: Overall guidelines for Copilot's behavior.

# 2. Code Generation: Specific instructions for generating code snippets.

# 3. Error Handling: Guidelines for handling errors and edge cases.

# 4. Testing: Instructions for testing the generated code.

# 5. If an error occurs, please follow the instructions using sequential-thinking.

# 6. Ensure to document any assumptions made during the coding process.

# 7. If you encounter any issues, please provide a detailed description of the problem.

# Copilot Instructions for Professional Code Generation and Bug Fixing

These instructions are designed to guide GitHub Copilot in generating code that adheres to professional standards, with a focus on identifying errors and fixing bugs step by step. For complex issues, Sequential Thinking MCP is invoked to ensure a structured and thorough approach.

## General Guidelines

- Always prioritize clarity and readability in code suggestions.
- Ensure code suggestions are consistent with the project's coding style and conventions.
- When generating code, consider edge cases and potential errors to minimize future debugging.

## Error Identification

- When reviewing code, highlight potential errors or issues, such as syntax errors, logical inconsistencies, or performance bottlenecks.
- Provide clear explanations for why a part of the code might be problematic.

## Bug Fixing

- For simple bugs, suggest direct fixes with a brief explanation.
- For complex bugs, break down the solution into sequential steps, ensuring each step is clearly explained.
- Use a step-by-step reasoning process to analyze the issue and propose solutions.
- If the bug is particularly challenging, explicitly use Sequential Thinking MCP to guide the debugging process.

## Example Prompts for Bug Fixing

- "Identify potential errors in this code and explain why they might occur."
- "Fix this bug step by step, explaining each part of the solution."
- "Use Sequential Thinking to debug this issue and provide a detailed resolution."

## Notes

- Sequential Thinking MCP is configured separately in `.vscode/mcp.json` and can be invoked using prompts like `#sequential-thinking` or `#think` for complex debugging tasks.
- Always review Copilot's suggestions to ensure they meet the project's requirements.
- Test all suggested fixes thoroughly before integrating them into the codebase.
