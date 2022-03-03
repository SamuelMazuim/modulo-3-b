import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableTasks1645665166387 implements MigrationInterface {
    name = 'CreateTableTasks1645665166387'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" character varying NOT NULL, "userId" integer NOT NULL, "title" character varying NOT NULL, "description" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tasks"`);
    }

}
