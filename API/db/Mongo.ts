import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";
import { cfg } from "../config/Index.ts";

// Initialize the plugin
await init();

export class DB {
    public client: MongoClient;
    constructor(public dbName: string, public url: string) {
        this.dbName = dbName;
        this.url = url;
        this.client = {} as MongoClient;
    }
    connect() {
        const client = new MongoClient();
        client.connectWithUri(this.url);
        this.client = client;
    }
    get getDatabase() {
        return this.client.database(this.dbName);
    }
}


const dbName = cfg.DB_NAME;
const dbHostUrl = cfg.DB_HOST_URL;
const db = new DB(dbName, dbHostUrl);
console.log(`${dbName} Connected at ${dbHostUrl}`);
db.connect();


export default db;