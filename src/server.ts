import { DatabaseConnection } from "./core/infra/database/connections/connection";

import App from "./app";

DatabaseConnection.initConnection()
    .then(() => {
        const app = new App();

        app.init();
    })
    .catch((error) => console.log(error));
