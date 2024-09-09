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
        "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=XML"
      );

      await redisClient.setEx(cacheKey, 3600, response.data);

      return response.data;
    } catch (error) {
      throw new Error("Error fetching makes");
    }
  }

  static async fetchVehicleTypes(makeId: number): Promise<any> {
    try {
      const response = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/${makeId}?format=xml`
      );
      return parseStringPromise(response.data);
    } catch (error) {
      throw new Error("Error fetching vehicle types");
    }
  }
}
