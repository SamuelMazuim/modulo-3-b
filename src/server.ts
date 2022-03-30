import { DatabaseConnection } from "./core/infra/database/connections/connection";

import App from "./app";
import { RedisConnection } from "./core/infra/database/connections/redis-connection";

DatabaseConnection.initConnection()
    .then(() => {
        const app = new App();
        RedisConnection.innitConnection();
        app.init();
    })
    .catch((error) => console.log(error));
