import React from 'react';

class SessionLength extends React.Component{
    render(){
        
        const session_length=this.props.session/60;
        return(
            <div className="block">
            <p>Study</p>
                <button className="timer-button" onClick={this.props.onSessionDecrement}>-</button>
                {session_length}
                <button className="timer-button" onClick={this.props.onSessionIncrement}>+</button>
            </div>
        )
    }
}
export default SessionLength;