import React from 'react';
import SessionLength from './SessionLength';

class Timer extends React.Component{
    render(){
        return(
            <div>
                <p>Session</p>
                <button >start</button>
                <button>stop</button>
                <button>reset</button>
            </div>
        )
    }
}

export default Timer;