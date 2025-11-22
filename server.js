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
const { guidelines } = require("./guidelines");

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
  const prompts = guidelines.map((guideline) => ({
    name: guideline.name,
    description: guideline.description,
  }));

  // Add the "all-components" prompt
  prompts.push({
    name: "all-components",
    description: "All design system component guidelines",
  });

  return { prompts };
});

// Get prompt content
server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  if (request.params.name === "all-components") {
    return {
      messages: guidelines.map((guideline) => ({
        role: "system",
        content: guideline.content,
      })),
    };
  }

  const guideline = guidelines.find((g) => g.name === request.params.name);

  if (guideline) {
    return {
      messages: [
        {
          role: "system",
          content: guideline.content,
        },
      ],
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
