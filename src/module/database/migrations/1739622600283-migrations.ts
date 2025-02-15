import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1739622600283 implements MigrationInterface {
    name = 'Migrations1739622600283'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2025-02-15T12:30:01.547Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2025-02-15T12:30:01.547Z"', "deleted_at" TIMESTAMP, "username" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "asset" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2025-02-15T12:30:01.547Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2025-02-15T12:30:01.547Z"', "deleted_at" TIMESTAMP, "location_id" integer NOT NULL, "type" character varying NOT NULL, "serial" character varying NOT NULL, "status" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_1209d107fe21482beaea51b745e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "company" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT '"2025-02-15T12:30:01.547Z"', "updated_at" TIMESTAMP NOT NULL DEFAULT '"2025-02-15T12:30:01.547Z"', "deleted_at" TIMESTAMP, "location_id" integer NOT NULL, "location_name" character varying NOT NULL, "organization" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_056f7854a7afdba7cbd6d45fc20" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "company"`);
        await queryRunner.query(`DROP TABLE "asset"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
