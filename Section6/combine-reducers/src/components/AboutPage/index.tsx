import React from "react";
import Fruits from "../Fruits";
import Users from "../Users";

class AboutPage extends React.Component{
    render(){
        return(
            <div>
                <Fruits ownerName='Oliver'/>
                <Users ownerName="Oliver"></Users>
            </div>
        )
    }
}

export default AboutPage;