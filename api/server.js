import express, { json } from "express";
import authorsRoute from "./authors.js";

const server = express();

server.use(json);

server.use("/authors", authorsRoute);

export default server;
