import { Router } from "express";
import { listMissions } from "./controllers/missionController";

const routes = Router();

routes.get("/", listMissions);

export default routes;
