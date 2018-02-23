import React from 'react';
import SessionLength from './SessionLength';

class Timer extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.alert}</p>
                <div className="session-length pieChart">{this.props.displayedMinutes}:{this.props.displayedSeconds}</div>

                
                <button className="button" onClick = {this.props.onStartTimer} >start</button>
                <button className="button" onClick = {this.props.onPauseTimer}>stop</button>
                <button className="button" onClick={this.props.onResetTimer}>reset</button>
            </div>
        )
    }
}

export default Timer;