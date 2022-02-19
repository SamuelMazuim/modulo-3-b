import { Request, Response, Router } from "express";
import CreateTaskController from "./controllers/create-task-controller";
import DeleteTaskController from "./controllers/delete-task-controller";
import EditTaskController from "./controllers/edit-task-controller";
import GetTaskByUserController from "./controllers/get-task-by-user-controller";
import GetTaskController from "./controllers/get-task-controller";
import { TaskRepository } from "./repositories/task-repository";

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
