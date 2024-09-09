import { parseStringPromise } from 'xml2js';

export class DataTransformer {
  static async transformXmlToJson(xmlData: any): Promise<any> {
    try {
      const parsedData = await parseStringPromise(xmlData);
      const results = parsedData.Response.Results[0].AllVehicleMakes;

      const transformed = results.map((make: any) => ({
        makeId: make.Make_ID[0],
        makeName: make.Make_Name[0],
      }));

      return transformed;
    } catch (error) {
      throw new Error("Error transforming XML to JSON");
    }
  }
}
