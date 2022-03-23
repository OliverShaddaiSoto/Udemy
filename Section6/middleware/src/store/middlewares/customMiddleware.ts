import { Middleware, Store } from "redux";

export type customMiddlewareFuntion = (store: Store)=> any;

export interface customDispatch{
  <T>(action: T): T
  (param: customMiddlewareFuntion): any
}

//The creation of an middleware
export const customMiddleware: Middleware = store => next => action => {
    if (typeof action === 'function') {
      next(action(store));
    }else{
      next(action);
    }
  }

