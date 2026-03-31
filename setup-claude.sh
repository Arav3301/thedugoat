#!/bin/bash

# Quick Setup Script for Claude in VS Code
# This script helps you set up Claude for development on the theDuGoat project

echo "🎯 Welcome to theDuGoat - Claude Setup Assistant"
echo "================================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ npm is installed: $(npm --version)"
echo ""

# Ask user which Claude integration they want
echo "Which Claude integration would you like to use?"
echo "1) Claude Code CLI (Recommended - Official Anthropic tool)"
echo "2) Cline VS Code Extension"
echo "3) Continue.dev VS Code Extension"
echo "4) Skip Claude setup (just install project dependencies)"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo ""
        echo "📦 Installing Claude Code CLI globally..."
        npm install -g @anthropic-ai/claude-code

        echo ""
        echo "🔑 Setting up API Key..."
        echo "Please enter your Anthropic API key (get it from https://console.anthropic.com):"
        read -p "API Key: " api_key

        # Detect shell and update config
        if [ -n "$ZSH_VERSION" ]; then
            echo "export ANTHROPIC_API_KEY='$api_key'" >> ~/.zshrc
            echo "✅ Added API key to ~/.zshrc"
        elif [ -n "$BASH_VERSION" ]; then
            echo "export ANTHROPIC_API_KEY='$api_key'" >> ~/.bashrc
            echo "✅ Added API key to ~/.bashrc"
        else
            echo "export ANTHROPIC_API_KEY='$api_key'"
            echo "⚠️  Please add the above line to your shell configuration file manually"
        fi

        echo ""
        echo "✅ Claude Code CLI is installed!"
        echo "   Run 'claude' in this project directory to start"
        ;;

    2)
        echo ""
        echo "🔧 To install Cline:"
        echo "   1. Open VS Code"
        echo "   2. Press Ctrl+Shift+X (or Cmd+Shift+X on Mac)"
        echo "   3. Search for 'Cline'"
        echo "   4. Click Install"
        echo "   5. Configure your Anthropic API key in the extension settings"
        ;;

    3)
        echo ""
        echo "🔧 To install Continue.dev:"
        echo "   1. Open VS Code"
        echo "   2. Press Ctrl+Shift+X (or Cmd+Shift+X on Mac)"
        echo "   3. Search for 'Continue'"
        echo "   4. Click Install"
        echo "   5. Configure Anthropic as provider in Continue settings"
        echo "   6. Enter your API key"
        ;;

    4)
        echo ""
        echo "⏭️  Skipping Claude setup..."
        ;;

    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "📦 Installing project dependencies..."
npm install

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Make sure you have your Convex project set up"
echo "2. Add NEXT_PUBLIC_CONVEX_URL to your .env.local file"
echo "3. Run 'npm run dev' to start the development server"
echo "4. Check out CLAUDE_SETUP.md for detailed Claude usage instructions"
echo ""
echo "Happy coding with Claude! 🚀"
