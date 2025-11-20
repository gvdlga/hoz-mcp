#!/usr/bin/env node
import { GeniusMcpServer, ApiKeyManager, McpFunction } from '@geniusagents/mcp';
import { IsTherapistFunction } from "./functions/istherapist.function.js";
import { BookRoomFunction } from "./functions/bookroom.function.js";
import { CancelBookedRoomFunction } from "./functions/cancelbookedroom.function.js";
import { GetAvailableRoomsFunction } from "./functions/getavailablerooms.function.js";

// Initialize the ApiKeyManager with the MCP Name for the Genius Dashboard
ApiKeyManager.initialize({
    mcpName: "HoZ-room",
    dashboardUrl: process.env.DASHBOARD_URL || "https://dashboard.geniusagents.nl/api/mcp"
});

const functions: McpFunction[] = [
    new IsTherapistFunction(),
    new BookRoomFunction(),
    new CancelBookedRoomFunction(),
    new GetAvailableRoomsFunction()
];

const server = new GeniusMcpServer("HoZ Room MCP Service", 3002, functions);
server.run().catch(console.error);