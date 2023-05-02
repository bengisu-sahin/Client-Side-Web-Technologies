class Car extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h2>I am a {this.props.make} {this.props.model}</h2>
        );
    }
}
class App extends React.Component {
    render(){
        return (
            <div>
                <h1>We have two cars:</h1>
                <Car make="Toyota" model="Corolla"/>
                <Car make="Honda" model="Civic"/>
            </div>
        )
    } 
}
ReactDOM.render(<App />, document.getElementById('root'));