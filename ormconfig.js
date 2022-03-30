require("dotenv/config")

// USAR SERVIDOR //

module.exports = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: ["dist/core/infra/database/entities/**/*"],
    migrations: ["dist/core/infra/database/migrations/**/*"],
    cli: {
        entitiesDir: "dist/core/infra/database/entities",
        migrationsDir: "dist/core/infra/database/migrations",
    },
    synchronize: false,
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
}

// TESTE LOCAL //

// module.exports = {
//     type: "postgres",
//     url: process.env.DATABASE_URL,
//     entities: ["src/core/infra/database/entities/**/*"],
//     migrations: ["src/core/infra/database/migrations/**/*"],
//     cli: {
//         entitiesDir: "src/core/infra/database/entities",
//         migrationsDir: "src/core/infra/database/migrations",
//     },
//     synchronize: false,
//     extra: {
//         ssl: {
//             rejectUnauthorized: false,
//         },
//     },
// }
