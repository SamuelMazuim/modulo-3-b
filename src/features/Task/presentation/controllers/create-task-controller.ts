import { Request, Response } from "express"
import { CacheRepository } from "../../../../core/infra/repositories/redis-repository"
import { TaskRepository } from "../../infra/repositories/task-repository"

export default class CreateTaskController {
    public async handle(req: Request, res: Response) {
        const { userId } = req.params
        const cacheRepository = new CacheRepository()
        const cache = await cacheRepository.delete(`task:${userId}`)

        const { title, description } = req.body
        const repository = new TaskRepository()

        const task = { userId: +userId, title, description }
        repository.create(task)
        return res.json(task)
    }
}
