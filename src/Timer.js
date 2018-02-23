import React from 'react';
import SessionLength from './SessionLength';

class Timer extends React.Component{
    render(){
        return(
            <div>
                <p>Session</p>
                <p>{this.props.alert}</p>
                <div>{this.props.displayedMinutes}:{this.props.displayedSeconds}</div>

                
                <button onClick = {this.props.onStartTimer} >start/Pause</button>
                <button onClick = {this.props.onPauseTimer}>stop</button>
                <button onClick={this.props.onResetTimer}>reset</button>
            </div>
        )
    }
}

export default Timer;