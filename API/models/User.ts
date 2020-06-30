import db from "../db/Mongo.ts";

const database = db.getDatabase;
export const users = database.collection('users');

export interface IUser {
    id: string,
    name: string,
    username: string,
    email: string
}