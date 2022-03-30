import { Request, Response } from "express";
import { TaskRepository } from "../../infra/repositories/task-repository";

export default class GetTaskByUserController {
    public async handle(req: Request, res: Response) {
        const repository = new TaskRepository();
        const { userId } = req.params;
        console.log(await repository.getByUser(+userId));

        return res.json(await repository.getByUser(+userId));
    }
}
