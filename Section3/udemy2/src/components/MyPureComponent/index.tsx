import React from "react";
import {MyPureComponentProps, MyPureComponentState} from './interface';

class MyPureComponent extends React.PureComponent<MyPureComponentProps, MyPureComponentState>{

    constructor(props: MyPureComponentProps){
        super(props);

        this.state = {
            name: 'Oliver',
            address: {
                city: 'Toluca',
                state: 'Mexico'
            }
        }
    }
    handleSetState = () => {
        this.setState({
            name:'May'
        })
    }

    render(){
        const {name, address} = this.state;
        return(
            <div>
                <h3>Pure Component</h3>
                <h2>name: {name}</h2>
                <h3>City: {address.city}</h3>
                <h3>State: {address.state}</h3>
                <button onClick={this.handleSetState}>Set State</button>
            </div>
        );
    }
}


export default MyPureComponent;