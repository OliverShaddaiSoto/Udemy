export interface UsersOwnProps{
    ownerName: string;
}

export interface UsersStatePorps{
    users: string[];
}

export interface UsersDispatchProps{
    addUsers(users: string[]): any;   
}

export type UsersProps = UsersOwnProps & UsersStatePorps & UsersDispatchProps;