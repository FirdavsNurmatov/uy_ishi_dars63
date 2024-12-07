import app from "./src/app";
import { config } from "dotenv";
import { logger } from "./src/utils/index";

config();

const port = process.env.PORT;

const startApp = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      logger.info("Server is runnig on port " + port);
    });
  } catch (error) {
    logger.error(error);
    process.exit(1);
  }
};

startApp();
