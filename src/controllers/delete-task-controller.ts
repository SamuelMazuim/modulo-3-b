import { Request, Response } from "express";
import { TaskRepository } from "../repositories/task-repository";

export default class DeleteTaskController {
    public handle(req: Request, res: Response) {
        const repository = new TaskRepository();
        const { taskId } = req.params;

        return res.json(repository.delete(taskId));
    }
}
