import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/openai.routes.js";
dotenv.config({ path: "../.env" });

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(`${port}`, () => {
  console.log(`server running on ${port}`);
});

app.use("/api", chatRoutes);
