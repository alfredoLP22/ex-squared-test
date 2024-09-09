import axios from "axios";
import { parseStringPromise } from "xml2js";
import redisClient from "./redisClient";

export class XmlParserService {
  static async fetchMakes(): Promise<any> {
    const cacheKey = "allVehicleMakes";

    try {
      const cachedData = await redisClient.get(cacheKey);

      if (cachedData) {
        return cachedData;
      }
      const response = await axios.get(
        `${process.env.VEHICLE_API_BASE_URL}/getallmakes?format=XML`
      );

      await redisClient.setEx(cacheKey, 3600, response.data);

      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }

  static async fetchVehicleTypes(makeId: string): Promise<any> {
    const cacheKey = `vehicleTypes_${makeId}`;
    try {
      const cachedData = await redisClient.get(cacheKey);

      if (cachedData) {
        return JSON.parse(cachedData);
      }
      const response = await axios.get(
        `${process.env.VEHICLE_API_BASE_URL}/GetVehicleTypesForMakeId/${makeId}?format=xml`
      );
      return response.data;
    } catch (error) {
      throw new Error("Error fetching vehicle types");
    }
  }
}
