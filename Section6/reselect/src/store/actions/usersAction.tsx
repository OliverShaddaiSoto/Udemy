import { Store } from "redux"
import { rootReducer, StoresStatesType } from "../reducer/rootReducer";
import { UsersReducersAction } from "../reducer/usersReducer";

class UsersActions{
    static ADD_USERS = 'ADD_USERS'

    addUsers = (users: string[]) => (store: Store<StoresStatesType>): UsersReducersAction =>{
        console.log(store.getState());
        
        return {type: UsersActions.ADD_USERS, users}
    }
}

export default UsersActions
