import Mission, { IMission } from "../models/missionModel";

export const findAllMissions = async (arg?: string): Promise<IMission[]> => {
  if (arg === undefined) {
    return Mission.find();
  }
  const query = {
    $or: [
      { name: { $regex: arg, $options: "i" } },
      { target_name: { $regex: arg, $options: "i" } },
      { launch_vehicle: { $regex: arg, $options: "i" } },
    ],
  };

  return Mission.find(query);
};
