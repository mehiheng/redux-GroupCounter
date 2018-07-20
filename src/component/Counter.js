import React, {Component} from 'react';
import "../App.css"

export default class Counter extends Component{
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }
    multipley=()=>{
        const mulitpier= this.textInput.current.value
        this.props.Multiple(mulitpier,this.props.index)
    }

    delay = () =>{
                 setTimeout(()=>this.props.onIncrement(this.props.index),1000);
             };

    render() {
        const { index,value, onIncrement, onDecrement } = this.props;
        return (
            <div className="App">
                Clicked: {value} times
                {' '}
                <button onClick={()=>onIncrement(index)}>
                    +
                </button>
                <button onClick={()=>onDecrement(index)}>
                    -
                </button>
                <button onClick={this.multipley}>
                    *
                </button>
                <button onClick={this.delay}>
                    Increment Async
                </button>
                <input
                    type="text"
                    ref={this.textInput} />
            </div>
        );
    }









}