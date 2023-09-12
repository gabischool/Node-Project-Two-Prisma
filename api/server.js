import express, { json } from "express";
// import authorsRoute from "./authors.js";
import route from "./authors.js";

const server = express();

server.use(express.json());

server.use("/api/authors", route);

export default server;
