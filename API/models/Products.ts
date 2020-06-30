import db from "../db/Mongo.ts";

const database = db.getDatabase;
export const products = database.collection('products');