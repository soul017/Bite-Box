import { useContext } from "react";
import UserContext from "../utils/UserContext";
import Userclass from "./Userclass";
import React from "react";
// Class Based Component
class About extends React.Component{
  constructor(prop){
    super(prop);
    // console.log("Parent constructor");
  }
 async componentDidMount(){
// console.log("Parent CDM");

}
  render(){
    // console.log("Parent Render");
    
    return (
      <div>
        <h1>About us</h1>
        <div>
        Name:  <UserContext.Consumer>
  {({loggedInUser})=><h1>{loggedInUser}</h1>}
</UserContext.Consumer>
        </div>
        <p>Here we tell you who and what we are:</p>
        <Userclass name={"First"} Location={"Aligarh"} clg={"Galgotias"}/>
        {/* <User name={"Lokesh"} surname={"Sengar"}/> */}
        {/* <Userclass name={"Second"} Location={"US"} clg={"Tesla"}/> */}
        
      </div>
    );
  }
}
export default About;
// Functional component

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <p>Here we tell you who and what we are:</p>
//       {/* <User name={"Lokesh"} surname={"Sengar"}/> */}
//       <Userclass name={"Lokesh"} Location={"Aligarh"} clg={"Galgotias"}/>
//     </div>
//   );
// };

// -Parent Constructor
// -Parent Render

//  --FirstChild constructor
//  --FirstChild Render

//  --SecondChild constructor
//  --SecondChild Render

//     --FirstChild CDM
//     --SecondChild CDM

// --Parent CDM


// NOTE
/* we can't pass hooks or custom hooks in class based 
components as hooks comes in modern react that why while
going offline it does not show the message as shown on another 
page while going offline as we are unable to pass hook in 
class based component but we can do similar thing in class
based component also to achieve it search it online.*/

