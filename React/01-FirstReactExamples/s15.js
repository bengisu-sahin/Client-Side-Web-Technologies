class Football extends React.Component{
    constructor(props){
        super(props);
    }
    shoot(){
        alert("Great Shot! this.props.color: " + this.props.color);
    }
    render(){
        return <button onClick={this.shoot.bind(this)}>Take the shot!</button>
    }
    
}
ReactDOM.render(<Football color="red"/>, document.getElementById('root'));