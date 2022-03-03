import { randomUUID } from "crypto";

export interface TaskParams {
    userId: number;
    id?: string;
    title: string;
    description: string;
}

export class Task implements TaskParams {
    userId: number;
    id?: string;
    title: string;
    description: string;

    constructor({ userId, title, description }: TaskParams) {
        this.userId = userId;
        this.id = randomUUID();
        this.title = title;
        this.description = description;
    }
}
