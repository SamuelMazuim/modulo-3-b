import { Request, Response } from "express";
import { TaskRepository } from "../repositories/task-repository";

export default class GetTaskByUserController {
    public handle(req: Request, res: Response) {
        const repository = new TaskRepository();
        const { userId } = req.params;

        return res.json(repository.getByUser(+userId));
    }
}
