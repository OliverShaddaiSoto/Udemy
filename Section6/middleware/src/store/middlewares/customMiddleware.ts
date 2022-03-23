import { AnyAction, Middleware, Store } from "redux";
import FruitsActions from "../actions/fruitsAction";
import { FruitsReducerAction } from "../reducer/fruitsReducer";
import { StoresStatesType } from "../reducer/rootReducer";
import { UsersReducersAction } from "../reducer/usersReducer";

export type CustomMiddlewareFuntion<S, R> = (store: Store<S>)=> R;

export interface customDispatch<S , R>{
  <T>(action: T): T
  (param: CustomMiddlewareFuntion<S , R>): any;
}

//The creation of an middleware
export const customMiddleware: Middleware<{}, StoresStatesType,customDispatch<StoresStatesType,FruitsReducerAction | UsersReducersAction>> = store => next => action => {
    if (typeof action === 'function') {
      next(action(store));

      store.dispatch(new FruitsActions().addFruits([]))
    }else{
      next(action);
    }
  }

