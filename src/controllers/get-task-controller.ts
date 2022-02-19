import { Request, Response } from "express";
import { TaskParams, TaskRepository } from "../repositories/task-repository";

export default class GetTaskController {
    public handle(req: Request, res: Response): Response<TaskParams[]> {
        const repository = new TaskRepository();

        return res.json(repository.get());
    }
}
