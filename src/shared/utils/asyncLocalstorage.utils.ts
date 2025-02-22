import {AsyncLocalStorage} from 'async_hooks';

export interface Store {
    requestId: string;
}

export const asyncLocalStorage = new AsyncLocalStorage<Store>();
export const getRequestId = () => asyncLocalStorage.getStore()?.requestId;
