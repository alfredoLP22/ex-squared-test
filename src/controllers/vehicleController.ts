import { Request, Response } from "express";
import { XmlParserService } from "../services/xmlParserService";
import { DataTransformer } from "../services/dataTransformer";
import { VehicleModel } from "../models/vehicleModel";

export const getAllMakes = async (req: Request, res: Response) => {
  try {
    const xmlData = await XmlParserService.fetchMakes();
    const jsonData = await DataTransformer.transformXmlToJson(xmlData);
    await VehicleModel.create(jsonData);
    res.json(jsonData);
  } catch (error: any) {
    res
      .status(500)
      .send({ message: "Error processing request", error: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const xmlData = await XmlParserService.fetchVehicleTypes(req.params.id);
    console.log(xmlData);
    const jsonData = await DataTransformer.transformXmlToJsonType(xmlData);
    res.json(jsonData);
  } catch (error: any) {
    res
      .status(500)
      .send({ message: "Error processing request", error: error.message });
  }
};
