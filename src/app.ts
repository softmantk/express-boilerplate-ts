import express from 'express'

import router from "./routes";

import {errorLogger, requestLogger} from "./shared/middlewares/logger.middleware";
import errorMiddleware from "./shared/middlewares/error.middleware";
import {requestContextMiddleware} from "./shared/middlewares/requestContext.middleware";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(requestContextMiddleware);
app.use(requestLogger)
app.use(router)
app.use(errorLogger, errorMiddleware)
export default app;