import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            counterValue: props.initialValue,
            timeout: props.timeout          
        }
    } //end-constructor

    // Gets called after the component is rendered.
    // At that point we would like to set the time interval so that
    // we can start incrementing the value of the counter                 
    componentDidMount() {
        this.timerId = setInterval(this.Increment, this.state.timeout);
    } // componentDidMount

    Increment = () =>{
        this.setState({counterValue: this.state.counterValue+1});
    } //end-Increment

    // Gets called before the component is to be removed from the DOM
    // At that point, we have to stop the timer
    componentWillUnmount(){
        clearInterval(this.timerId);                    
    } //end-componentWillUnmount
    
    // Generate the HTML for the component
    render(){
        return (
            <h2>Counter value: {this.state.counterValue}</h2>
        );
    } //end-render
} //end-Counter

export default Counter;
