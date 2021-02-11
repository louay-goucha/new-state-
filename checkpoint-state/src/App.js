import './App.css';
import FullName from "./components/FullName"
import { Component, useState,useEffect } from 'react';
import Bio from "./components/Bio"
import Profession from "./components/Profession"
import Photo from "./components/Photo"

export default class App extends Component{
  state = {
    show: false,
    time:0
  }
  hide = () => this.setState({
    show:!this.state.show
  })
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time:this.state.time+1
      })
    },1000)
  }
  render() {
    return (
      <div>
<div className="App">
      <button className="butt" onClick={this.hide} >{this.state.show? "Hide":"Show" }</button>
      {
        this.state.show ? (
              <>
                <Photo/>
            <FullName />
            <Profession />
                <Bio />
                <p style={{marginLeft:"650px"}} > {this.state.time} </p>
            </>
        ):(<> </>)
      }
      
    </div>
      </div>
    )
  }
} 
