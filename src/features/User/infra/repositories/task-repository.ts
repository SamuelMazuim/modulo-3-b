import { TaskEntity } from "../../../../core/infra/database/entities/task";
import { TaskParams } from "../../domain/model/task-model";

export class TaskRepository {
    create(data: TaskParams) {
        const task = TaskEntity.create({
            userId: data.userId,
            title: data.title,
            description: data.description,
        });
        task.save();
        return task;
    }

    get() {
        return TaskEntity.find();
    }

    getByUser(userId: number) {
        return TaskEntity.find({
            where: {
                userId: userId,
            },
            order: {
                created_at: "ASC",
            },
        });
    }

    async edit(taskId: string, title: string, description: string) {
        await TaskEntity.update(taskId, { title, description });
        const task = await TaskEntity.findOne(taskId);
        return task;
    }

    async delete(taskId: string) {
        const task = await TaskEntity.findOne(taskId);
        if (task) {
            return TaskEntity.remove(task);
        }
    }
}
