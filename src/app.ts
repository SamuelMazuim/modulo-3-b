import express, { json, urlencoded, Express, Request, Response, Router } from "express";
import cors from "cors";
import routes from "./features/Task/presentation/routes/routes";
import TaskRouter from "./features/Task/presentation/routes/routes";

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
        const routes = Router();
        routes.get("/", (req: Request, res: Response) => {
            return res.send("ok");
        });
        const taskRoutes = new TaskRouter().init(routes);
        this.express.use(taskRoutes);
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
