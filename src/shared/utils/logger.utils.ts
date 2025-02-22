import * as winston from "winston";
import {getRequestId} from "./asyncLocalstorage.utils";

interface ILogger {
    info(msg: any): void;

    error(msg: any): void;

    debug(msg: any): void;
}

function safeJSONParse(str: unknown) {
    if (typeof str !== "string") return str;
    try {
        return JSON.parse(str);
    } catch (e) {
        return str;
    }
}


const orderJsonFormatter = winston.format((log) => {
    const {
        requestId, timestamp, level, message, ...rest
    } = log;
    return {
        level, timestamp, requestId, message, ...rest,
    };
});

const requestIdentifierTransformer = winston.format((log) => {
    log.requestId = getRequestId();
    log.message = safeJSONParse(log.message);
    return log;
});

const createLogger = () => winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        requestIdentifierTransformer(),
        winston.format.timestamp(),
        winston.format.splat(),
        orderJsonFormatter(),
        winston.format.json({deterministic: false})
    ),
    transports: [
        new winston.transports.Console(),
    ],
});
export const logger: ILogger = createLogger()

export default createLogger();