import "dotenv/config";
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import main from "./routes/main";

const app: Application = express();

//middlewares
app.set("port", process.env.PORT || 4000);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

//routes
app.use("/", main);

export default app;
