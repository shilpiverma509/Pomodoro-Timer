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
      break_duration:300,
      session:1500,
      countdown:1500,
      intervalID:null,
      isSession:true,
      isPaused:true,
      isBreak:false,
      displayedMinutes:'',
      displayedSeconds:''
    }
    this.handleBreakDecrement=this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement=this.handleBreakIncrement.bind(this);
    this.handleSessionIncrement=this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement=this.handleSessionDecrement.bind(this);
    this.onPauseTimer = this.onPauseTimer.bind(this);
    this.onStartTimer = this.onStartTimer.bind(this);
    this.togglePauseState = this.togglePauseState.bind(this); 
  }


  

  handleSessionIncrement(){
    if(this.state.session<3600){
      this.setState({
        session:this.state.session+60,
        countdown:this.state.countdown+60
      },()=>
        this.displayTime()
      );
      //else display an alert saying you reached the max limit 
    }
  }

  handleSessionDecrement(){
    if(this.state.session>900){
      this.setState({
        session:this.state.session-60,
        countdown:this.state.countdown+60
      },()=>this.displayTime());
    }
    //else display an alert you reached the min limit for a work session
  }

  handleBreakDecrement(){
    if(this.state.break>300){
      this.setState({
        break_duration:this.state.break_duration-60
      })
    }
    //else alert minimum break time is 5 minutes
  }

  handleBreakIncrement(){
    if(this.state.break_duration<900){
      this.setState({
        break_duration:this.state.break_duration+60
      })
    }
    //else alert that;s the maximum break allowed
  }

  componentwillMount(){
    this.displayTime();
  }

  displayTime(number=this.state.countdown){
    const countdown = number;
    const minutes = Math.floor(countdown/60);
    const seconds = countdown%60;
    const displayedMinutes= minutes<10?'0'+minutes.toString():minutes.toString();
    const displayedSeconds = seconds<10?'0'+seconds.toString:seconds.toString();

    this.setState({
      countdown:countdown,
      displayedMinutes,
      displayedSeconds
    });
  }

  togglePauseState(){
    this.setState({
      isPaused:!this.state.isPaused
    })
  }

  elapsedTime(){
    const countdown = this.state.countdown-1;
    this.displayTime(countdown);
  }

  //pomodoro session
  onStartTimer(){
    if(this.state.isPaused){
      this.displayTime();
      this.setState({
        intervalID:setInterval(this.elapsedTime,1000),
        isPaused:!this.state.paused
      });
    }
  }

  //session on Pause
  onPauseTimer(){
    clearInterval(this.state.intervalID);
  }


  componentDidUpdate(){
    if((this.state.countdown<0) && (this.state.isSession)){
      this.setState({
        isSession:!isSession,
        isBreak:!isBreak,
        countdown:this.state.break_duration
      },()=>this.displayTime());
    }
    else if(this.state.countdown<0 && this.state.isBreak){
      this.onPauseTimer();
      this.setState({
        isSession:!this.state.isSession,
        isBreak:!this.state.isBreak,
        countdown:this.state.session,
        isPaused:!this.state.isPaused
      },()=>this.displayTime());

    }
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
        onStartTimer={this.onStartTimer}
        displayedMinutes={this.state.displayedMinutes}
        displayedSeconds={this.state.displayedSeconds}
        onPauseTimer={this.onPauseTimer}
         />
      </div>
    )
  }
}


export default App;
