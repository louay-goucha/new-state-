import React from "react";
class Welcome extends React.Component {
 state = {
   name: "G-Easy"
 };
 render() {
   return <h2 className="Full" >Fullname :  <em>{this.state.name}</em></h2>;
 }
}
export default Welcome;