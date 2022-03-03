require("dotenv/config");

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["**/core/infra/database/entities/**/*.{js, ts}"],
    migrations: ["**/core/infra/database/migrations/**/*.{js, ts}"],
    cli: {
        entitiesDir: "**/core/infra/database/entities",
        migrationsDir: "**/core/infra/database/migrations",
    },
    synchronize: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
