#!/usr/bin/env node
const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListPromptsRequestSchema,
  GetPromptRequestSchema,
} = require("@modelcontextprotocol/sdk/types.js");
const { transformNode } = require("./transform.js");
const { prompts } = require("./prompts.js");

const server = new Server(
  {
    name: "Muibook Guidelines",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
      prompts: {},
    },
  }
);

// List available prompts
server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: [
      {
        name: "button-guidelines",
        description: "Guidelines for Button component - actions and interactions",
      },
      {
        name: "dialog-guidelines",
        description: "Guidelines for Dialog component - modal windows and overlays",
      },
      {
        name: "all-components",
        description: "All design system component guidelines",
      },
    ],
  };
});

// Get prompt content
server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  const promptMap = {
    "button-guidelines": 0,
    "dialog-guidelines": 1,
  };

  if (request.params.name === "all-components") {
    return {
      messages: prompts,
    };
  }

  const index = promptMap[request.params.name];
  if (index !== undefined) {
    return {
      messages: [prompts[index]],
    };
  }

  throw new Error(`Unknown prompt: ${request.params.name}`);
});

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "serve_guidelines",
        description: "Access guidelines for your design system as you build to ensure consistency.",
        inputSchema: {
          type: "object",
          properties: {
            json: {
              type: "string",
              description: "Access guidelines for your design system as you build to ensure consistency.",
            },
          },
          required: ["json"],
        },
      },
    ],
  };
});

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "serve_guidelines") {
    const json = request.params.arguments.json;
    const output = transformNode(json);

    return {
      content: [
        {
          type: "text",
          text: output,
        },
      ],
    };
  }

  throw new Error(`Unknown tool: ${request.params.name}`);
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
