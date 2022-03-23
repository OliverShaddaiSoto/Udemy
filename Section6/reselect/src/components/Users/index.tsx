import React from "react";
import { UsersDispatchProps, UsersOwnProps, UsersProps, UsersStatePorps } from "./interface";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { rootReducer, StoresStatesType } from "../../store/reducer/rootReducer";
import UsersActions from "../../store/actions/usersAction";
import { customDispatch } from "../../store/middlewares/customMiddleware";
import { UsersReducersAction } from "../../store/reducer/usersReducer";


class Users extends React.Component<UsersProps>{

clickAddUsers = () => {
    this.props.addUsers([ 'Paco', 'Sharon' ]);
}

    render(){

        const {ownerName, users} = this.props;
        return (
            <div>
                <h1>Owner: {ownerName}</h1>
                <h1>Users</h1>
                <ul>
                    {users.map((user) => <li key={user}>{user}</li>)}
                </ul>
                <button onClick={this.clickAddUsers}> Add Users </button>
            </div>
        )
    }
}

const mapStateToProps : MapStateToProps<UsersStatePorps, UsersOwnProps, ReturnType<typeof rootReducer>> = (state, ownProps) => {
        return{
            users: state.users
        }
}


const mapDispatchToProps = (dispatch: customDispatch<StoresStatesType, UsersReducersAction>, ownProps:UsersOwnProps): UsersDispatchProps => {
    const usersAction =  new UsersActions();
    return{
        addUsers: (users) => dispatch(usersAction.addUsers(users))
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Users);