import express from "express";
import { getPayloadCLient } from "./get-payload";
import { nextHandler } from "./next-utils";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadCLient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin url ${cms.getAdminURL()} `);
      },
    },
  });

  //   app.use((req, res) => nextHandler(req, res));
};

start();
