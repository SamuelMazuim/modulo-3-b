import { Request, Response } from "express"
import { CacheRepository } from "../../../../core/infra/repositories/redis-repository"
import { TaskRepository } from "../../infra/repositories/task-repository"

export default class DeleteTaskController {
    public async handle(req: Request, res: Response) {
        const { userId, taskId } = req.params
        const cacheRepository = new CacheRepository()

        const cache = await cacheRepository.delete(`task:${userId}`)

        const repository = new TaskRepository()

        return res.json(await repository.delete(taskId))
    }
}
