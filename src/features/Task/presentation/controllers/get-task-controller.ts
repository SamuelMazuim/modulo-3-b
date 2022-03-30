import { Request, Response } from "express";
import { CacheRepository } from "../../../../core/infra/repositories/redis-repository";
import { TaskParams } from "../../domain/model/task-model";
import { TaskRepository } from "../../infra/repositories/task-repository";

export default class GetTaskController {
    public async handle(req: Request, res: Response): Promise<Response<TaskParams[]>> {
        const cacheRepository = new CacheRepository();
        const cache = await cacheRepository.get("task:all");

        if (cache) {
            let cacheJson = res.json(
                cache.map((task: any) => Object.assign({}, task, { cache: true }))
            );
            return cacheJson;
        }

        const repository = new TaskRepository();

        const getRepository = await repository.get();

        await cacheRepository.set("task:all", getRepository);

        return res.json(await repository.get());
    }
}
