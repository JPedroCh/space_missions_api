import { model, Schema } from "mongoose";

export interface IMission extends Document {
  id: String;
  name: String;
  launch_date: Date;
  target_type: String;
  target_name: String;
  mission_type: String;
  distance: Number;
  duration: Number;
  cost: Number;
  scientific_yield: Number;
  crew_size: Number;
  success: Number;
  fuel_consumption: Number;
  payload_weight: Number;
  launch_vehicle: String;
}

export const missionSchema = new Schema<IMission>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  launch_date: { type: Date, required: true },
  target_type: { type: String, required: true },
  target_name: { type: String, required: true },
  mission_type: { type: String, required: true },
  distance: { type: Number, required: true },
  duration: { type: Number, required: true },
  cost: { type: Number, required: true },
  scientific_yield: { type: Number, required: true },
  crew_size: { type: Number, required: true },
  success: { type: Number, required: true },
  fuel_consumption: { type: Number, required: true },
  payload_weight: { type: Number, required: true },
  launch_vehicle: { type: String, required: true },
});

export default model<IMission>("Mission", missionSchema);
