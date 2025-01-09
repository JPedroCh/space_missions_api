import { findAllMissions } from "../repositories/missionRepository";
import { IMission } from "../models/missionModel";

export const getAllMissions = async (arg: string): Promise<IMission[]> => {
  return findAllMissions(arg);
};
