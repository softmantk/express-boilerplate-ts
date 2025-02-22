import {Request, Response} from 'express'

type Options = {
    code?: string,
    message?: any,
    status?: number,
    name?: string
}


export const createErrorResponse = (options: Options, req: Request, res: Response) => {
    const status = options.status || 400;
    const body = {
        code: options.code,
        message: options.message,
        status: status
    };
    return res.status(status).json(body);
};