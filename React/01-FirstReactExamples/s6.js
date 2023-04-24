class Car extends React.Component{
    render(){
        return <h2>Hi, I am a Car!</h2>
    }
    
}
//To render this component inside ReactDOM.rende using JSX, vall it as follows:
ReactDOM.render(<Car />, document.getElementById('root'));