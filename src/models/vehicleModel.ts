import mongoose from "mongoose";

const VehicleSchema = new mongoose.Schema({
  makeName: String,
  makeId: String,
});

export const VehicleModel = mongoose.model("Vehicle", VehicleSchema);
