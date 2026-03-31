# Getting Claude in VS Code

There are several ways to use Claude AI in VS Code for working on this project:

## Option 1: Claude Code CLI (Recommended for Development)

Claude Code is the official CLI tool from Anthropic that integrates Claude directly into your development workflow.

### Installation

1. **Install Claude Code CLI:**
   ```bash
   npm install -g @anthropic-ai/claude-code
   ```

2. **Set up your API key:**
   - Get your API key from [console.anthropic.com](https://console.anthropic.com)
   - Set it in your environment:
     ```bash
     export ANTHROPIC_API_KEY='your-api-key-here'
     ```
   - Or add it to your `~/.bashrc` or `~/.zshrc` for persistence

3. **Start Claude Code in this project:**
   ```bash
   cd /path/to/thedugoat
   claude
   ```

### What You Can Do With Claude Code

- **Code Generation**: Ask Claude to write new features, components, or functions
- **Code Review**: Get feedback on your code quality and potential improvements
- **Debugging**: Ask Claude to help identify and fix bugs
- **Refactoring**: Request code improvements and modernization
- **Documentation**: Generate or improve code documentation
- **Testing**: Create unit tests for your components

### Example Commands

```bash
# Start an interactive session
claude

# Then ask Claude to help with specific tasks:
"Help me create a new player card component"
"Review the Convex schema and suggest improvements"
"Add TypeScript types for the marketplace feature"
"Create unit tests for the PlayerCard component"
```

## Option 2: Cline VS Code Extension

Cline is a VS Code extension that brings Claude AI directly into your editor.

### Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
3. Search for "Cline"
4. Click Install
5. Configure your Anthropic API key in the extension settings

### Features

- Chat with Claude directly in VS Code
- Ask Claude to edit files in your workspace
- Get code suggestions and explanations
- Run terminal commands with Claude's help

## Option 3: Continue.dev Extension

Continue is another popular VS Code extension for AI-assisted development.

### Installation

1. Open VS Code
2. Go to Extensions
3. Search for "Continue"
4. Click Install
5. Configure with Anthropic/Claude in settings:
   - Open Continue settings
   - Add Anthropic as a provider
   - Enter your API key

## Option 4: GitHub Copilot with Claude

While GitHub Copilot primarily uses OpenAI, you can use it alongside Claude Code for a comprehensive AI development experience.

## Best Practices for This Project

### Working with Next.js + Convex

When asking Claude to help with this project, provide context:

```
"This is a Next.js cricket card game using Convex as the backend.
We use TypeScript, Tailwind CSS, and Framer Motion for animations.
The main entities are Players, Cards, Users, and Matches stored in Convex."
```

### Example Tasks for Claude

1. **Add new features:**
   - "Create a new trading system where users can trade cards"
   - "Add player statistics visualization with charts"

2. **Improve existing code:**
   - "Refactor the PlayerCard component to be more modular"
   - "Add error handling to all Convex queries"

3. **Database work:**
   - "Help me design a new Convex schema for tournaments"
   - "Create queries for leaderboard functionality"

4. **Testing:**
   - "Generate tests for the marketplace features"
   - "Create integration tests for the Convex mutations"

## Project-Specific Setup

### Environment Variables

Make sure you have these environment variables set:

```bash
# For Convex
NEXT_PUBLIC_CONVEX_URL=your-convex-url

# For Claude (if using Claude Code CLI)
ANTHROPIC_API_KEY=your-anthropic-api-key
```

### VS Code Workspace Settings

This project includes recommended VS Code settings in `.vscode/settings.json` for the best Claude integration experience.

## Getting Help

- Claude Code Documentation: https://github.com/anthropics/claude-code
- Anthropic API Docs: https://docs.anthropic.com
- This Project's README: See README.md for project-specific details

## Security Note

**Never commit your API keys to version control!** The `.gitignore` file is configured to exclude `.env` files where you should store your sensitive keys.
