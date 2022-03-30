require("dotenv/config")

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["**/core/infra/database/entities/**/*"],
    migrations: ["**/core/infra/database/migrations/**/*"],
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
}
//usar no servidor
// entities: ["src/core/infra/database/entities/**/*.{js, ts}"],
//     migrations: ["src/core/infra/database/migrations/**/*.{js, ts}"],
//     cli: {
//         entitiesDir: "src/core/infra/database/entities",
//         migrationsDir: "src/core/infra/database/migrations",
//usar no server local
// entities: ["src/core/infra/database/entities/**/*"],
//     migrations: ["src/core/infra/database/migrations/**/*"],
//     cli: {
//         entitiesDir: "src/core/infra/database/entities",
//         migrationsDir: "src/core/infra/database/migrations",
