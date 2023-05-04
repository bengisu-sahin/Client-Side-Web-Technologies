class Football extends React.Component {
    shoot = (a, e) => {
        alert(`Message: ${a}, eventType: ${e.type}, color: ${this.props.color}`);
    }
    render() {
        return <button onClick={(e) => this.shoot("Goal", e)}>Take the shot!</button>
    }
}
ReactDOM.render(<Football color="red" />, document.getElementById('root'));