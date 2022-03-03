import { Request, Response } from "express";
import { TaskParams } from "../../domain/model/task-model";
import { TaskRepository } from "../../infra/repositories/task-repository";

export default class GetTaskController {
    public async handle(req: Request, res: Response): Promise<Response<TaskParams[]>> {
        const repository = new TaskRepository();

        return res.json(await repository.get());
    }
}
