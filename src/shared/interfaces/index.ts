import {errorCodes} from "../utils/errors.utils";

export interface AppError extends Error {
    code?: keyof typeof errorCodes;
    status?: number;
}