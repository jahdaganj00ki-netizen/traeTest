---
description: Project AI Coding Behaviors and Standards
alwaysApply: true
---

## General Code Quality

- Write clean, readable, and maintainable code
- Follow DRY (Don't Repeat Yourself) principles
- Use meaningful variable and function names
- Add comments only when the code's intent is not immediately clear
- Keep functions small and focused on a single responsibility

## Documentation

- All public APIs and functions must include clear documentation
- Include examples in documentation where helpful
- Keep README files up-to-date with project changes
- Document any non-obvious design decisions

## Security

- Never commit secrets, API keys, or credentials to version control
- Always sanitize and validate user inputs
- Use environment variables for sensitive configuration
- Follow security best practices for the language and framework in use

## Version Control

- Write clear, descriptive commit messages
- Keep commits focused and atomic
- Use feature branches for new development
- Follow the project's branching strategy

## Testing

- Write tests for new features and bug fixes
- Ensure tests are maintainable and readable
- Run tests before committing changes
- Aim for good test coverage of critical paths

## Code Style

- Follow the language's standard style guide (e.g., PEP 8 for Python, StandardJS for JavaScript)
- Use consistent indentation (spaces preferred)
- Keep line length reasonable (typically 80-120 characters)
- Use linters and formatters to maintain consistency

## Dependencies

- Keep dependencies up-to-date and secure
- Document the purpose of each major dependency
- Minimize the number of dependencies when possible
- Use lock files to ensure reproducible builds
