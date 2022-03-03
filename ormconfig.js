require("dotenv/config");

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["src/core/infra/database/entities/**/*.ts"],
    migrations: ["src/core/infra/database/migrations/**/*.ts"],
    cli: {
        entitiesDir: "src/core/infra/database/entities",
        migrationsDir: "src/core/infra/database/migrations",
    },
    synchronize: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
};
