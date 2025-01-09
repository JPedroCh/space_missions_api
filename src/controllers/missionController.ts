import { Request, Response } from "express";
import { getAllMissions } from "../services/missionService";

export const listMissions = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const missions = await getAllMissions(String(req.query.search));
    res.status(200).json(missions);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch missions" });
  }
};
