import "reflect-metadata";
import { createConnections } from "typeorm";
import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();
app.use(cors());
createConnections();

app.use(express.json());
app.use(routes);

app.listen(3000, () => console.log("Servidor rodando local na porta 3000"));
