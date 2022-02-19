import { randomUUID } from "crypto";
import { Task } from "../model/task-model";

let tasks = <Array<TaskParams>>[];

export interface TaskParams {
    userId: number;
    id?: string;
    title: string;
    description: string;
}

export class TaskRepository {
    create(data: TaskParams) {
        const task = new Task({
            userId: data.userId,
            title: data.title,
            description: data.description,
        });
        console.log(tasks);
        return tasks.push(task);
    }

    get(): TaskParams[] {
        return tasks;
    }

    getByUser(userId: number): TaskParams[] {
        const userTasks = tasks.filter((task) => userId == task.userId);
        return userTasks;
    }

    edit(taskId: string, title: string, description: string) {
        const taskIndex = tasks.findIndex((task) => task.id == taskId);
        if (taskIndex == -1) {
            return;
        }
        tasks[taskIndex].title = title;
        tasks[taskIndex].description = description;
        return tasks[taskIndex];
    }

    delete(taskId: string) {
        const taskIndex = tasks.findIndex((task) => task.id == taskId);
        if (taskIndex == -1) {
            return;
        }
        return tasks.splice(taskIndex, 1);
    }
}
