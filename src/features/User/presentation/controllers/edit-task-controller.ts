import { Request, Response } from "express";
import { TaskRepository } from "../../infra/repositories/task-repository";

export default class EditTaskController {
    public async handle(req: Request, res: Response) {
        const repository = new TaskRepository();
        const { taskId } = req.params;
        const { title, description } = req.body;

        return res.json(await repository.edit(taskId, title, description));
    }
}
