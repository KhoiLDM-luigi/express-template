//base package
import express from "express";
import http from "http";
import cors from "cors";
import logger from "morgan";
import bodyParser from "body-parser";
import "dotenv/config";

//module
import rootRouter from "../module/root/index.js";

//express
const app = express();
const server = http.createServer(app);

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
if (process.env.LOGGER_TYPE == "dev");
app.use(logger("dev"));

//routing
app.use("/", rootRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    status: error.status || 500,
    error: error.message,
  });
});

export default server;
