import { Request, Response } from "express";
import { TaskRepository } from "../../infra/repositories/task-repository";

export default class DeleteTaskController {
    public async handle(req: Request, res: Response) {
        const repository = new TaskRepository();
        const { taskId } = req.params;

        return res.json(await repository.delete(taskId));
    }
}
