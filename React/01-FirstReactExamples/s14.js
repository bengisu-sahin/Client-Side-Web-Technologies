class Football extends React.Component {
    constructor(props){
        super(props);
        this.shoot=this.shoot.bind(this);
    }
    shoot() {
        alert("Great Shot! this:" + this.props.color);
    }
    render() {
        return <button onClick={this.shoot} >Take the shot!</button>
    }
}
ReactDOM.render(<Football color="red"/>, document.getElementById("root"));