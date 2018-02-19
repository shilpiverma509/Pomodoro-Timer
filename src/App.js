import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import BreakLength from './BreakLength';
import SessionLength from './SessionLength';
import Timer from './Timer';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      break_duration:5,
      session:25,
      isTimerRunning:false,
      timeElapsed:0

    }
    this.handleDecrement=this.handleDecrement.bind(this);
    this.handleIncrement=this.handleIncrement.bind(this);
    this.handleSessionIncrement=this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement=this.handleSessionDecrement.bind(this);
  }


   
  handleIncrement(){
    this.setState({
      break_duration:this.state.break_duration+1,
    })
  }
  handleDecrement(){
    this.setState({
      break_duration:this.state.break_duration-1,
    })
  }
 handleSessionIncrement(){
   this.setState({
     session:this.state.session+1
   })
 }
 handleSessionDecrement(){
  this.setState({
    session:this.state.session-1
  })
}

componentDidMount(){
  this.interval=setInterval(this.elapseTime,1000);
}


  render(){
    return(
      <div>
        <BreakLength
        break_duration={this.state.break_duration}
        onBreakLengthIncrement={this.handleIncrement}
        onBreakLengthDecrement={this.handleDecrement}
         />
        <SessionLength
        session={this.state.session}
        onSessionIncrement={this.handleSessionIncrement}
        onSessionDecrement={this.handleSessionDecrement}
        
         />
        <Timer
        
        session={this.state.session}
         />
      </div>
    )
  }
}


export default App;
