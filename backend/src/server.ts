import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(routes);
app.listen(3333, () => console.log("Servidor rodando local na porta 3333"));
