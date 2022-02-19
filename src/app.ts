import express, { json, urlencoded, Express } from "express";
import cors from "cors";
import routes from "./routes";

export default class App {
    readonly express: Express;
    constructor() {
        this.express = express();
    }

    public middlewares() {
        this.express.use(cors());
        this.express.use(json());
        this.express.use(urlencoded());
    }

    public routes() {
        this.express.use(routes);
    }

    public start() {
        this.express.listen(process.env.PORT || 5050, () => console.log("Server is running..."));
    }

    public init() {
        this.middlewares();
        this.routes();
        this.start();
    }
}
