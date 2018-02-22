import React from 'react';

class SessionLength extends React.Component{
    render(){
        
        const session_length=this.props.session/60;
        return(
            <div>
                <p>SessionLength</p>
                <button onClick={this.props.onSessionDecrement}>-</button>
                {session_length}
                <button onClick={this.props.onSessionIncrement}>+</button>
            </div>
        )
    }
}
export default SessionLength;