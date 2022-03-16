import React from "react";
import Fruits from "../Fruits";

class AboutPage extends React.Component{
    render(){
        return(
            <div>
                <Fruits ownerName='Oliver'/>
            </div>
        )
    }
}

export default AboutPage;