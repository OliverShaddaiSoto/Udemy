import React from "react";
import { UsersDispatchProps, UsersOwnProps, UsersProps, UsersStatePorps } from "./interface";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { rootReducer } from "../../reducer/rootReducer";


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


const mapDispatchToProps: MapDispatchToProps<UsersDispatchProps, UsersOwnProps> = (dispatch, ownProps) => {
    return{
        addUsers: (users) => dispatch({type: 'ADD_USERS', users})
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(Users);