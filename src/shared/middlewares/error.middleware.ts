import {ErrorRequestHandler, NextFunction, Request, Response} from 'express';

import {logger} from "../utils";
import {errorCodes, getErrorByCode} from "../utils/errors.utils";
import {createErrorResponse} from "../utils/response.utils";

const errorMiddleware: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {

    if (getErrorByCode(err.code)) {
        createErrorResponse(err, req, res);
    }
    if ([401].includes(err.status)) {
        createErrorResponse(err, req, res);
    }
    logger.debug(`some error: ${err.toString()}`);
    res.status(500).json(errorCodes.internalError);
}
export default errorMiddleware;