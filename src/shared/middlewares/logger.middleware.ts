import {Request, Response, NextFunction, ErrorRequestHandler} from 'express';

import {logger} from "../utils";

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    const start = Date.now();

    logger.info({
            type: 'BEFORE',
            url: req.url,
            method: req.method,
            data: req.body,
        }
    );

    res.on('finish', () => {
        if (res.statusCode >= 400) {
            return;
        }
        const duration = Date.now() - start;
        const payloadSize = res.get('Content-Length') || 0;

        logger.info({
            type: 'AFTER',
            method: req.method,
            url: req.url,
            payloadSize: +payloadSize,
            responseTime: duration,
        });
    });

    next();
};

export const errorLogger: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    logger.error(
        {
            type: 'ERROR',
            method: req.method,
            url: req.url,
            error: err.toString()
        }
    );
    next(err);
};
