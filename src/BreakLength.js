import React from 'react';
class BreakLength extends React.Component{
    
  
    render(){
        const break_length = this.props.break_duration;
        return(
            <div>
                <p>BreakLength</p>
                <button onClick={this.props.onBreakLengthDecrement}>-</button>
                {break_length}
                
                <button onClick={this.props.onBreakLengthIncrement}>+</button>
            </div>    
        )
    }
}
export default BreakLength;