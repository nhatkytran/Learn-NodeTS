import express from "express";
import config from "config";

import logger from "./utils/logger";
import connect from "./utils/connect";

import routes from "./routes";

const app = express();

app.use(express.json());

const port = config.get<number>("port") || 3000;

app.listen(port, async () => {
  logger.info(`App is running at port ${port}...`);

  await connect();

  routes(app);
});
