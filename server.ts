import { server} from "./app"; // Importing the Express server
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const PORT: number = Number(process.env.PORT) || 5000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
