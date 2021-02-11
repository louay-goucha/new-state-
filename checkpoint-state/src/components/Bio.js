import React from "react";
class Welcome extends React.Component {
 state = {
   Bio: "G-Eazy, real name Gerald Earl Gillum, born May 24, 1989 in Oakland, California, is an American rapper, singer-songwriter and producer. G-Eazy carried out numerous projects (mixtapes and EP) before giving birth to his first studio album. He describes his music as contemporary rap enriched with the style of 1950s culture."
 };
 render() {
   return <h2>Bio :  <em>{this.state. Bio}</em></h2>;
 }
}
export default Welcome;