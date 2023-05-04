class Football extends React.Component{
    //e is the event
    shoot(e){
        alert(`evenType:${e.type},color:${this.props.color}`);
    }
    //event e is implicity passed to the handler
    render(){
        return <button onClick={this.shoot.bind(this)}>Take the shot !</button>
    }
}
ReactDOM.render(<Football color="red"/>, document.getElementById('root'));
