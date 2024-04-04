import express from "express";
import morgan from "morgan";
import config from "config";

import logger from "./utils/logger";
import connect from "./utils/connect";

import routes from "./routes";
import deserializeUser from "./middleware/ deserializeUser";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(deserializeUser);

const port = config.get<number>("port") || 3000;

app.listen(port, async () => {
  logger.info(`App is running at port ${port}...`);

  await connect();

  routes(app);
});
