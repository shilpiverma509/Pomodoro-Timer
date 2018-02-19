import React from 'react';
import SessionLength from './SessionLength';

class Timer extends React.Component{
    render(){
        const session_length = this.props.session;
        
       
        
        return(
            <div>
                <p>Session</p>
                {session_length}
                <button >start</button>
                <button>stop</button>
                <button>reset</button>
            </div>
        )
    }
}

export default Timer;