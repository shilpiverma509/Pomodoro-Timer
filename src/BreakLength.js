import React from 'react';
class BreakLength extends React.Component{
    
  
    render(){
        const break_length = this.props.break_duration/60;
        return(
            <div>
                <p>BreakLength</p>
                <button onClick={this.props.onBreakDecrement}>-</button>
                {break_length}
                
                <button onClick={this.props.onBreakIncrement}>+</button>
            </div>    
        )
    }
}
export default BreakLength;