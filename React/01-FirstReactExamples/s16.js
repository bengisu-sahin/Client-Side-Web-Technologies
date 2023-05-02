class Football extends React.Component{
    //when you define shoot as an arrow function this is automatically bound.
    show=()=>{
        alert("Great Shot! this.props.color: " + this.props.color);
    }
    render(){
        return <button onClick={this.shoot}>Take the shot !</button>
    }
}
ReactDOM.render(<Football color="red"/>, document.getElementById('root'));