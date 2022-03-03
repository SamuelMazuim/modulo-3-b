import { Connection, createConnection, getConnection } from "typeorm";

export class DatabaseConnection {
    private static _connection: Connection;

    static async initConnection() {
        if (!DatabaseConnection._connection) {
            this._connection = await createConnection();
        }
    }

    static getConnection() {
        let connection = getConnection();
        if (!connection) {
            throw new Error("Database is not connected");
        }
        return DatabaseConnection._connection;
    }
}
