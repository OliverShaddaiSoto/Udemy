import React from "react";
import Profile from '../Profile';
import ReactDOM from "react-dom";

class HomePage extends React.Component {
    profileRef: React.RefObject<Profile> = React.createRef();

    componentDidMount(){
        console.log(ReactDOM.findDOMNode(this.profileRef.current));
        
    }
    render(){
        return(
            <div>
                <h1>Home Page</h1>
                <Profile />
            </div>
        );
    }
}

export default HomePage;