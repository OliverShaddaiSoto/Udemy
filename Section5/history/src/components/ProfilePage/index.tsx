import React from "react";
import { createBrowserHistory } from "history"; 

const history = createBrowserHistory();

class ProfilePage extends React.Component{
goHome = () => 
{
    history.push('/');
}

    render(){
        return(
            <div>
                <h1>Profile Page</h1>
                <button onClick={this.goHome}>Go home</button>
            </div>
        )
    }
}


export default ProfilePage;