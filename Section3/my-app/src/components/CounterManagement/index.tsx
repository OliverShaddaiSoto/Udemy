import React from "react";
import { CounterManagementProps, CounterManagementStates } from "./interface";

class CounterManagement extends React.Component<CounterManagementProps, CounterManagementStates> {
    
    constructor(props: CounterManagementProps){
        super(props);
        this.state ={
            counter: 0
        }
    }

    handleAddClicl = () => {
        this.setState(function(prevState){
            return {
                counter: prevState.counter + 1
            }
        }, function(){
            console.log('Callback Function');
            
        }
        )
    }

    handleMinusClick = () => {
        this.setState({ counter: this.state.counter - 1});
    }
    
    render(){
        console.log('render');
        const { ownerName } = this.props;
        const {counter} = this.state;
        return (
            <div>
                <h1>Counter Management </h1>
                <h2>OwnerName: {ownerName}</h2>
                <h3> Counter: {counter}</h3>
                <button onClick={this.handleAddClicl}>Add: </button>
                <button onClick={this.handleMinusClick}>Minus: </button>
            </div>
        );
    }

}

export default CounterManagement;