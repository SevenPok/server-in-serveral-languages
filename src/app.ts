import 'dotenv/config';
import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.set("port", process.env.PORT || 4000);
app.use(cors());
app.use(express.json());

export default app;
