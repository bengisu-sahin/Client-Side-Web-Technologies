class Football extends React.Component {
    //when you define shoot as an arrow function, this is automatically bound.
    shoot = (e) => {
        alert(`eventType: ${e.type}, color: ${this.props.color}`);
    }
    render() {
        return <button onClick={this.shoot}>Take the shot !</button>
    }
}
ReactDOM.render(<Football color="pink" />, document.getElementById("root"));