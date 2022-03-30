import { Request, Response } from "express"
import { CacheRepository } from "../../../../core/infra/repositories/redis-repository"
import { TaskRepository } from "../../infra/repositories/task-repository"

export default class GetTaskByUserController {
    public async handle(req: Request, res: Response) {
        const { userId } = req.params
        const cacheRepository = new CacheRepository()
        const cache = await cacheRepository.get(`${userId}-task:all`)

        if (cache) {
            let cacheJson = res.json(
                cache.map((task: any) => Object.assign({}, task, { cache: true }))
            )
            return cacheJson
        }

        const repository = new TaskRepository()

        const getByUserRepository = await repository.getByUser(+userId)

        console.log(getByUserRepository)

        await cacheRepository.set(`${userId}-task:all`, getByUserRepository)

        return res.json(getByUserRepository)
    }
}
