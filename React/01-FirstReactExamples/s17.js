class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counterValue: props.initialValue }
    }
    Increment = () => { this.setState({ counterValue: this.state.counterValue + 1 }) }
    Decrement = () => { this.setState({ counterValue: this.state.counterValue - 1 }) }
    render() {
        return (
            <div style={{ fontSize: "20px" }}>
                <p><strong>Counter Value:</strong> {this.state.counterValue}</p>
                <button onClick={this.Increment}>Increment</button>{" "}
                <button onClick={this.Decrement}>Decrement</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter initialValue={10} />, document.getElementById("root"));