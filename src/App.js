import React from 'react';
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
      displayedSeconds:'',
      alert:''
    }
    this.defaultState=this.state;
    this.handleBreakDecrement=this.handleBreakDecrement.bind(this);
    this.handleBreakIncrement=this.handleBreakIncrement.bind(this);
    this.handleSessionIncrement=this.handleSessionIncrement.bind(this);
    this.handleSessionDecrement=this.handleSessionDecrement.bind(this);
    this.onPauseTimer = this.onPauseTimer.bind(this);
    this.onStartTimer = this.onStartTimer.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.togglePauseState = this.togglePauseState.bind(this); 
  }


  
//maximum session time is 60 minutes
  handleSessionIncrement(){
    if(this.state.session<3600){
      this.setState({
        session:this.state.session+60, 
        countdown:this.state.session+60
      },()=>
        this.displayTime()
      );
      //else display an alert saying you reached the max limit 
    }
  }
//minimum session time is 1 minute
  handleSessionDecrement(){
    if(this.state.session>60){
      this.setState({
        session:this.state.session-60,
        countdown:this.state.session-60
      },()=>this.displayTime());
    }
    //else display an alert you reached the min limit for a work session
  }

  //minimum break duration is 1 minutes
  handleBreakDecrement(){
    if(this.state.break_duration>60){
      this.setState({
        break_duration:this.state.break_duration-60
      })
    }
    //else alert reached  minimum break time.
  }
//maximum break duration is 2 minutes
  handleBreakIncrement(){
    if(this.state.break_duration<120){
      this.setState({
        break_duration:this.state.break_duration+60
      })
    }
    //else alert that;s the maximum break allowed
  }

  componentwillMount(){
    this.displayTime();
  }

  displayTime(){
    const countdown = this.state.countdown;
    console.log(countdown)
    const minutes = Math.floor(countdown/60);
    const seconds = countdown%60;
    const displayedMinutes= minutes<10?'0'+minutes.toString():minutes.toString();
    const displayedSeconds = seconds<10?'0'+seconds.toString():seconds.toString();

    this.setState({
      countdown,
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
    this.state.countdown = this.state.countdown -1;
    console.log("countdown: ",this.state.countdown);
    this.displayTime(this.state.countdown);
  }

  //pomodoro session
  onStartTimer(){
    if(this.state.isPaused){
      this.displayTime();
      this.setState({
        intervalID:setInterval(this.elapsedTime.bind(this),1000),
        isPaused:!this.state.isPaused
      });
    }
    else{
      this.onPauseTimer();
      this.setState({
        isPaused:!this.state.isPaused
      })
    }
  }

  //session on Pause
  onPauseTimer(){
    clearInterval(this.state.intervalID);
  }


  componentDidUpdate(){
    if((this.state.countdown<0) && (this.state.isSession)){
      this.setState({
        isSession:!this.state.isSession,
        isBreak:!this.state.isBreak,
        countdown:this.state.break_duration,
        alert:'Time for a break'
      },()=>this.displayTime());
    }
    else if(this.state.countdown<0 && this.state.isBreak){
      this.onPauseTimer();
      this.setState({
        isSession:!this.state.isSession,
        isBreak:!this.state.isBreak,
        countdown:this.state.session,
        isPaused:!this.state.isPaused,
        alert:'Time to study'
        
      },()=>{
        this.displayTime();
        this.onStartTimer();
    });
    }}

    onResetTimer(){
      clearInterval(this.state.intervalID);
      this.setState(this.defaultState);
    
    }

  render(){
    return(
      <div>
        <BreakLength
        break_duration={this.state.break_duration}
        onBreakIncrement={this.handleBreakIncrement}
        onBreakDecrement={this.handleBreakDecrement}
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
        togglePauseState={this.togglePauseState}
        onResetTimer={this.onResetTimer}
        session={this.state.session}
        alert={this.state.alert}
         />
      </div>
    )
  }
}


export default App;
