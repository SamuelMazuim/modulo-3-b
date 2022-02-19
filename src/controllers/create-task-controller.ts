import { Request, Response } from "express";
import { TaskParams, TaskRepository } from "../repositories/task-repository";

export default class CreateTaskController {
    public handle(req: Request, res: Response): Response<TaskParams> {
        const { userId } = req.params;
        const { title, description } = req.body;
        const repository = new TaskRepository();

        const task = { userId: +userId, title, description };
        repository.create(task);
        return res.json(task);
    }
}
