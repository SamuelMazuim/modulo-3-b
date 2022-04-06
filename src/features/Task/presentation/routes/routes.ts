import { Request, Response, Router } from "express"
import CreateTaskController from "../controllers/create-task-controller"
import DeleteTaskController from "../controllers/delete-task-controller"
import EditTaskController from "../controllers/edit-task-controller"
import GetTaskByUserController from "../controllers/get-task-by-user-controller"
import GetTaskController from "../controllers/get-task-controller"
import { TaskRepository } from "../../infra/repositories/task-repository"

export default class TaskRouter {
    public init(routes: Router): Router {
        const repository = new TaskRepository()

        routes.post("/task/:userId", new CreateTaskController().handle)

        routes.get("/task", new GetTaskController().handle)

        routes.get("/task/:userId", new GetTaskByUserController().handle)

        routes.put("/task/:userId/:taskId", new EditTaskController().handle)

        routes.delete("/task/:userId/:taskId", new DeleteTaskController().handle)

        return routes
    }
}
