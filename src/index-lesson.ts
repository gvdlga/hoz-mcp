#!/usr/bin/env node
import { GeniusMcpServer, ApiKeyManager, McpFunction } from '@geniusagents/mcp';
import { GetScheduleFunction } from "./functions/getschedule.function.js";
import { IsCustomerFunction } from "./functions/iscustomer.function.js";
import { RegisterLessonFunction } from "./functions/registerlesson.function.js";
import { CancelBookedLessonFunction } from "./functions/cancelbookedlesson.function.js";

// Initialize the ApiKeyManager with the MCP Name for the Genius Dashboard
ApiKeyManager.initialize({
    mcpName: "HoZ-lesson",
    dashboardUrl: process.env.DASHBOARD_URL || "https://dashboard.geniusagents.nl/api/mcp"
});

const functions: McpFunction[] = [
    new GetScheduleFunction(),
    new IsCustomerFunction(),
    new RegisterLessonFunction(),
    new CancelBookedLessonFunction()
];

const server = new GeniusMcpServer("HoZ Lesson MCP Service", 3001, functions);
server.run().catch(console.error);