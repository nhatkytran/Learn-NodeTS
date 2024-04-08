import config from "config";

import createServer from "./server";
import logger from "./utils/logger";
import connect from "./utils/connect";

const app = createServer();

const port = config.get<number>("port") || 1337;

app.listen(port, async () => {
  logger.info(`App is running at port ${port}...`);

  await connect();
});
