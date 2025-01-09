import express, { json } from "express";
import cors from "cors";
import routes from "./routes";
import dotenv from "dotenv";
import { connectToDatabase } from "./config/database";

dotenv.config();

const port = Number(process.env.PORT) || 4001;
const app = express();

app.use(cors());
app.use(routes);
app.use(json());

connectToDatabase();

app.listen(port, "0.0.0.0", () => {
  console.log(`Running on port ${port}`);
});
