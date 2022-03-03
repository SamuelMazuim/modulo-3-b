import { Request, Response, Router } from "express";
import CreateTaskController from "./core/presentation/controllers/create-task-controller";
import DeleteTaskController from "./core/presentation/controllers/delete-task-controller";
import EditTaskController from "./core/presentation/controllers/edit-task-controller";
import GetTaskByUserController from "./core/presentation/controllers/get-task-by-user-controller";
import GetTaskController from "./core/presentation/controllers/get-task-controller";
import { TaskRepository } from "./core/infra/repositories/task-repository";

let routes = Router();
const repository = new TaskRepository();

routes.post("/task/:userId", new CreateTaskController().handle);

routes.get("/task", new GetTaskController().handle);

routes.get("/task/:userId", new GetTaskByUserController().handle);

routes.put("/task/:taskId", new EditTaskController().handle);

routes.delete("/task/:taskId", new DeleteTaskController().handle);

routes.get("/", (req: Request, res: Response) => {
    return res.send("ok");
});

export default routes;
