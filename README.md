# Muibook Guidelines MCP Server

An MCP (Model Context Protocol) server that provides design system guidelines and component documentation to Cursor Desktop.

## Overview

This MCP server delivers comprehensive design system guidelines directly to Cursor, enabling it to provide accurate, consistent advice about UI components, patterns, and best practices from your design system.

## Features

- **Component Guidelines**: Detailed documentation for UI components (buttons, forms, navigation, etc.)
- **Visual References**: Direct links to component anatomy diagrams and examples
- **Accessibility Standards**: Built-in accessibility requirements and best practices
- **Design Tokens**: Access to color, typography, spacing, and other design tokens
- **Usage Patterns**: Real-world examples and usage guidelines

## Installation

### Prerequisites

- Node.js (v16 or higher)
- Cursor Desktop application

### Setup

1. **Clone this repository**

```bash
git clone https://github.com/your-org/muibook-guidelines-mcp.git
cd muibook-guidelines-mcp
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Cursor Desktop**

Edit your Cursor Desktop config file:

- **macOS**: `~/Library/Application Support/Cursor/mcp_config.json`
- **Windows**: `%APPDATA%\Cursor\mcp_config.json`

Add this server:

```json
{
  "mcpServers": {
    "muibook-guidelines": {
      "command": "node",
      "args": ["/absolute/path/to/muibook-guidelines-mcp/server.js"]
    }
  }
}
```

Replace `/absolute/path/to/muibook-guidelines-mcp/` with the actual path where you cloned this repository.

4. **Restart Cursor Desktop**

Completely quit and reopen Cursor Desktop to load the MCP server.

## Usage

Once installed, you can ask Cursor about design guidelines:

**Examples:**

- "Show me the button component guidelines"
- "What are the accessibility requirements for buttons?"
- "What button variants are available?"
- "How should I use primary vs secondary buttons?"

### Available Prompts

**`serve_guidelines`** - Returns comprehensive design system guidelines including component anatomy, usage patterns, accessibility requirements, and visual references.

## What's Included

### Button Component Guidelines

- Complete anatomy breakdown with visual diagrams
- Usage guidelines and best practices
- Five button variants (Primary, Secondary, Tertiary, Link, Icon)
- Accessibility requirements
- Component states and behaviors

Full documentation: [https://guides.muibook.com/button](https://guides.muibook.com/button)

## Troubleshooting

### Red indicator in Cursor Desktop

**The server isn't connecting. Try these steps:**

1. **Verify the path** in your config file is correct and absolute
2. **Check Node.js version**: Run `node --version` (needs v16+)
3. **Test the server manually**:
   ```bash
   cd /path/to/muibook-guidelines-mcp
   node server.js
   ```
4. **Check for errors** in the console output
5. **Restart Cursor** completely (quit and reopen)

### Guidelines not appearing

- Confirm the server shows as connected in Cursor (not red)
- Try asking explicitly: "Show me the serve_guidelines prompt"
- Check Cursor's MCP logs for errors

### Images not loading

- Ensure you have internet connectivity (images are hosted externally)
- Check that the URLs in the guidelines are accessible
- Try fetching an image URL directly in your browser

## Development

### Running the server locally

```bash
node server.js
```

### Making changes

1. Edit `server.js` to modify guidelines
2. Restart Cursor Desktop to reload changes
3. Test your prompts

### Adding new components

Edit the prompt content in `server.js`:

```javascript
if (request.params.name === "serve_guidelines") {
  return {
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: `# Add your new component guidelines here`,
        },
      },
    ],
  };
}
```

## Project Structure

```
muibook-guidelines-mcp/
├── server.js            # MCP server implementation
├── package.json         # Dependencies and metadata
└── README.md           # This file
```

## Resources

- [MCP Documentation](https://modelcontextprotocol.io)
- [Cursor Documentation](https://cursor.sh)
- [Design System Guidelines](https://guides.muibook.com/)

## Contributing

We welcome contributions! To add or improve guidelines:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/new-component`)
3. Add or update component guidelines in `server.js`
4. Test with Cursor Desktop
5. Submit a pull request

## License

[Your License Here]

## Support

For issues or questions:

- Open an issue on GitHub
- Check the troubleshooting section above
- Contact the design system team

---

# NPM Package

## Versioning

- Follow **semantic versioning**: `major.minor.patch`
  - **Patch**: bug fixes, no API changes
  - **Minor**: new features, backward-compatible
  - **Major**: breaking changes, API changes
- Keep `package.json` and `server.json` versions synchronized.

## Bumping Versions

Patch:

```bash
npm version patch
```

Minor:

```bash
npm version minor
```

Major:

```bash
npm version major
```

This updates package.json version and creates a Git tag automatically.

## Publishing to NPM

Option A – Direct publish (NPM will prompt for credentials if needed):

```bash
npm publish --access public
```

Option B – Pre-login (recommended for repeated releases):

```bash
npm login
npm publish --access public
```

- --access public ensures the package is publicly available.
- Make sure package.json includes the MCP identifier:

```json
"mcpName": "io.github.YOURUSERNAME/muibook-guidelines-mcp"
```

⸻

## Optional MCP Registry Update

Ensure server.json matches the current version:

```json
"version": "1.0.0"
```

Publish to MCP Registry:

```bash
mcp-publisher publish
```

⸻

## GitHub Release (Optional)

Tag the release:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Add release notes in GitHub for tracking changes.

⸻

## Local Development & Testing

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm start
```

Connect via MCP client (Cursor, Cline, etc.) or mcp.json:

```json
{
  "servers": {
    "muibook-guidelines-mcp": {
      "command": "node",
      "args": ["./node_modules/muibook-guidelines-mcp/server.js"]
    }
  }
}
```

## Release Checklist

• Test MCP server locally
• Update package.json and server.json versions
• Bump version (patch, minor, or major)
• Commit and push changes
• Publish to NPM (--access public)
• Optionally publish to MCP Registry (mcp-publisher publish)
• Optionally create GitHub release with notes

## References

• NPM Publishing Docs￼
• MCP Registry Docs￼
• Semantic Versioning￼
