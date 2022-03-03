import { randomUUID } from "crypto";
import {
    BaseEntity,
    BeforeInsert,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "tasks" })
export class TaskEntity extends BaseEntity {
    @PrimaryColumn()
    id?: string;

    @Column()
    userId!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;

    @BeforeInsert()
    beforeInsert() {
        this.id = randomUUID();
    }
}
