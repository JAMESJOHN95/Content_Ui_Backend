import serverless from "serverless-http";
import { server } from "./app";

// Export the handler with proper typing
export const handler = serverless(server);
