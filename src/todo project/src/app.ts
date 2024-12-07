import morgan from "morgan";
import express, { Application } from "express";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/users");
app.use("/tasks");

export default app;
