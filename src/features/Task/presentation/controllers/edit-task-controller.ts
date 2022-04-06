import { Request, Response } from "express"
import { CacheRepository } from "../../../../core/infra/repositories/redis-repository"
import { TaskRepository } from "../../infra/repositories/task-repository"

export default class EditTaskController {
    public async handle(req: Request, res: Response) {
        const repository = new TaskRepository()
        const cacheRepository = new CacheRepository()

        const { userId, taskId } = req.params
        const { title, description } = req.body

        const cache = await cacheRepository.delete(`task:${userId}`)

        return res.json(await repository.edit(taskId, title, description))
    }
}
