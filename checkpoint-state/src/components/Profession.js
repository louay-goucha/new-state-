import React from "react";
class Welcome extends React.Component {
 state = {
   profession: "Rappeur ,singer-songwriter and producer "
 };
 render() {
   return <h2>Profession : <em>{this.state.profession}</em></h2>;
 }
}
export default Welcome;