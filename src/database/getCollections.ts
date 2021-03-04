import { Collection } from "mongodb";

import connectToDatabase from "./connectToMongo";

let db;

export const getLocations = async (): Promise<Collection> => {
  if (db === undefined) {
    db = await connectToDatabase();
  }

  return await db.collection("locations");
};
