import {Request, Response, NextFunction} from 'express';
import {v4 as uuidv4} from 'uuid';
import {asyncLocalStorage, Store} from "../utils/asyncLocalstorage.utils";

export function requestContextMiddleware(req: Request, res: Response, next: NextFunction) {
    const requestId = (req.headers['x-request-id'] as string) || uuidv4();
    const store: Store = {requestId};

    asyncLocalStorage.run(store, () => {
        next();
    });
}
