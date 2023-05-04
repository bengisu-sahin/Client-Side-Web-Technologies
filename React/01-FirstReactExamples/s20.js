class Football extends React.Component {
    //a is the argument, e is the event
    shoot(a, e) {
        alert(`Message: ${a}, eventType:${e.type},color:${this.props.color}`);
    }
    render() {
        return <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
    }
}
ReactDOM.render(<Football color="red" />, document.getElementById('root'));