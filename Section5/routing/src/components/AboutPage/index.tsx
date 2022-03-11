import React from "react";
import { AboutPageProps } from "./interface";

class AboutPage extends React.Component<AboutPageProps>{
 render(){
     return(
         <div>
             <h1>About</h1>
             <p>Name: {this.props.basename}</p>
         </div>
     )
 }   
}

export default AboutPage;