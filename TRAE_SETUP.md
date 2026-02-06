# TRAE IDE Setup Guide

This guide helps you get started with this repository in TRAE IDE.

## Initial Setup

### 1. Install TRAE IDE

If you haven't already, download and install TRAE IDE from [https://www.trae.ai/](https://www.trae.ai/)

### 2. Clone this Repository

In TRAE IDE:
1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac)
2. Type "Git: Clone" and select it
3. Enter the repository URL
4. Choose a local directory
5. Open the cloned repository

### 3. Verify Configuration

Once opened, TRAE IDE will automatically detect the `.trae` configuration:

- **AI Rules**: Check `.trae/rules/project_rules.md` - these rules guide AI behavior
- **MCP Servers**: Check `.trae/mcp.json` - configure external tools here

## Using AI Coding Rules

The AI assistant in TRAE IDE will follow the rules defined in `.trae/rules/project_rules.md`.

### Current Rules Include:

- ✅ Code quality standards
- ✅ Security best practices  
- ✅ Documentation requirements
- ✅ Testing guidelines
- ✅ Version control practices

### Customizing Rules

Edit `.trae/rules/project_rules.md` to add project-specific rules:

```markdown
## Python Specific
- Use type hints for all function parameters
- Follow PEP 8 style guide
- Use pytest for testing

## JavaScript Specific  
- Use ES6+ syntax
- Prefer const/let over var
- Use JSDoc for documentation
```

## Configuring MCP Servers

MCP (Model Context Protocol) allows TRAE IDE to connect to external tools and services.

### Adding a Custom MCP Server

Edit `.trae/mcp.json`:

```json
{
  "mcpServers": {
    "my-custom-server": {
      "command": "python3",
      "args": ["-m", "my_mcp_module"],
      "env": {
        "API_KEY": "your-key-here"
      }
    }
  }
}
```

### Available MCP Servers

You can find MCP servers at:
- [LobeHub MCP Directory](https://lobehub.com/mcp)
- Official TRAE documentation

### Popular MCP Servers:

- **trae-rules-mcp**: Auto-generate coding rules
- **Database connectors**: Access database schema
- **Linters**: Integrate code quality tools
- **Build tools**: Trigger builds and tests

## Git Integration

TRAE IDE has built-in Git support:

### Source Control Panel

Access with `Ctrl+Shift+G`:
- View changes
- Stage files
- Commit with messages
- Push/pull from remote

### Common Workflows

**Making Changes:**
1. Edit files with AI assistance
2. Stage changes in Source Control panel
3. Write descriptive commit message
4. Commit and push

**Syncing:**
1. Pull latest changes regularly
2. Resolve conflicts if needed
3. Push your changes

**Branching:**
1. Create feature branches for new work
2. Switch branches using Source Control
3. Merge when ready

## Working with AI Assistant

### Getting Help

Ask the AI assistant in TRAE IDE:
- "Explain this code"
- "Add error handling to this function"
- "Write tests for this module"
- "Refactor this to follow project rules"

### AI Follows Your Rules

The AI will automatically:
- Apply rules from `.trae/rules/project_rules.md`
- Follow language-specific conventions
- Maintain consistent code style
- Add appropriate documentation

### Tips for Best Results

1. **Be Specific**: "Add type hints to all functions in this file"
2. **Reference Rules**: "Make this follow our security rules"
3. **Iterate**: Review AI suggestions and ask for refinements
4. **Context**: Select relevant code before asking questions

## Project Structure

```
traeTest/
├── .trae/
│   ├── rules/
│   │   └── project_rules.md    # AI coding rules
│   └── mcp.json                # MCP server config
├── examples/
│   ├── python/
│   │   └── hello.py            # Python example
│   └── javascript/
│       └── hello.js            # JavaScript example
├── .gitignore                  # Git ignore patterns
└── README.md                   # Project documentation
```

## Testing the Setup

### 1. Test Python Example

```bash
python examples/python/hello.py
```

Expected output:
```
Hello, Developer! Welcome to TRAE IDE.

This repository is ready for TRAE IDE!
You can now:
- Edit code with AI assistance
- Use AI coding rules from .trae/rules/
- Synchronize with Git through TRAE IDE
- Extend functionality with MCP servers
```

### 2. Test JavaScript Example

```bash
node examples/javascript/hello.js
```

### 3. Test AI Rules

1. Open a file in the editor
2. Ask AI: "Review this code against project rules"
3. AI should reference rules from `.trae/rules/project_rules.md`

## Troubleshooting

### Rules Not Applied

- Check that `.trae/rules/project_rules.md` exists
- Verify the file has valid Markdown format
- Restart TRAE IDE

### MCP Server Not Working

- Check `.trae/mcp.json` has valid JSON
- Verify the command/path is correct
- Check environment variables are set
- Restart TRAE IDE after changes

### Git Issues

- Ensure you have Git installed
- Configure Git credentials in TRAE IDE settings
- For private repos, set up authentication

## Next Steps

1. **Customize Rules**: Edit `.trae/rules/project_rules.md` for your project
2. **Add MCP Servers**: Configure tools you need in `.trae/mcp.json`
3. **Start Coding**: Use AI assistance for development
4. **Collaborate**: Share this setup with your team

## Resources

- [TRAE IDE Documentation](https://docs.trae.ai/ide/)
- [MCP Protocol](https://docs.trae.ai/ide/model-context-protocol)
- [AI Rules Guide](https://www.kdjingpai.com/en/trae-ide-zhinanbu/)
- [Source Control in TRAE](https://traeide.com/docs/how-to-use-trae-source-control)

## Support

For issues or questions:
- Check [TRAE IDE Documentation](https://docs.trae.ai/)
- Visit [TRAE Community](https://github.com/Trae-AI/Trae)
- Review project rules and configuration files
