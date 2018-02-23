import React from 'react';
class BreakLength extends React.Component{
    
  
    render(){
        const break_length = this.props.break_duration/60;
        return(
            <div className= "block">
                <p>Break</p>
                <button className="timer-button" onClick={this.props.onBreakDecrement}>-</button>
                {break_length}
                <button className="timer-button" onClick={this.props.onBreakIncrement}>+</button>
            </div>    
        )
    }
}
export default BreakLength;