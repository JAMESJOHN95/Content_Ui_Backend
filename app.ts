import express, { Request, Response } from "express";
import cors from "cors";
import { getToken } from "./index"; // Ensure 'index.ts' exports getToken properly

const server = express();

server.use(express.static("public")); // Serve static files from the 'public' directory
server.use(cors());

// Token Generation Endpoint
server.post("/generate-token", async (req: Request, res: Response) => {
  try {
    const token: string = await getToken();
    console.log(token);
    res.json({ token });
  } catch (error) {
    console.error("Error in token generation endpoint:", error);
    res.status(500).json({ error: "Failed to generate token" });
  }
});

export { server };
